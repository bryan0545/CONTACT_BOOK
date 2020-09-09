import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchContacts, filterContacts } from './../actions/actions';
import ContactInfo from '../containers/ContactInfo';
import { withRouter } from 'react-router-dom'
import { getStates, deleteContacts } from './../api/api'
import FilterBar from './../containers/FilterBar'
import CreateContact from './CreateContact'
import { CardsContainer, ContactsContainer, StyledContact } from './../styles/styled';
import LoadingCircle from '../containers/LoadingCircle';
import Modal from '../containers/Modal';

class Contacts extends Component {
    constructor() {
        super()

        this.state = {
            contactStates: [],
            deleting: false,
            showFilter: false,
            stateFailed: false,
            filterName: "",
            filterState: 0
        }
    }

    isDisable(value) {
        this.setState({ deleting: !value })
    }

    showFilter(value) {
        this.setState({ showFilter: !value })
    }

    handelDelete = async (id, name, e) => {

        this.setState({ deleting: true })
        if (window.confirm(`Desea eliminar a ${name}?`)) {
            this.isDisable(this.state.deleting)
            const resp = await deleteContacts(id);
            window.alert(resp.message)
            await this.props.fetchContacts();
            this.isDisable(this.state.deleting)
        }
    }

    handelEdit = (id) => {
        this.props.history.push(`/contacts/edit/${id}`)
    }

    async getContactsStates() {
        try {
            const contactStates = await getStates();
            this.setState({
                contactStates: contactStates.data
            })
        } catch (error) {
            this.setState({
                stateFailed: true
            })
        }
    }

    getContacts() {
        this.props.fetchContacts();
    }

    componentDidMount() {
        this.getContacts();
        this.getContactsStates();
    }

    getStateName(key) {
        if (this.state.contactStates.length > 0) {
            return (this.state.contactStates.find(conta => conta.key == key)).value;
        }
        return "Undefine"
    }

    onChangeNameFilter = (e) => {
        e.preventDefault();
        this.setState({
            filterName: e.target.value
        })
        this.props.filterContacts(parseInt(this.state.filterState), e.target.value, this.props.contacts);
    }

    handleFilter = (e) => {
        e.preventDefault();
        this.setState({
            filterState: e.target.value
        })
        this.props.filterContacts(parseInt(e.target.value), this.state.filterName, this.props.contacts);
    }

    render() {
        return (
            <>
                {this.state.deleting && <Modal title={"Deleting"}></Modal>}
                <div>
                    <ContactsContainer>
                        {(this.props.filteredContacts && this.props.filteredContacts.length <= 0 && this.props.contacts && this.props.contacts.length <= 0 && !this.props.loading && this.props.error === "") &&
                            <CreateContact></CreateContact>
                        }
                        {this.props.loading && <LoadingCircle
                            title={"Loading Contacts..."}
                            border={"15px"}
                            size={"40px"} />
                        }
                        {(this.props.error != "" || this.state.stateFailed) && <StyledContact style={{ margin: '70px 20px' }}>{this.props.error}</StyledContact>}
                        {(this.props.filteredContacts && this.props.filteredContacts.length > 0 || this.props.contacts && this.props.contacts.length > 0) &&
                            <>
                                <FilterBar
                                    title={"Filter by state"}
                                    contactStates={this.state.contactStates}
                                    handleFilter={this.handleFilter}
                                    showFilter={() => this.showFilter(this.state.showFilter)}
                                    filter={this.state.showFilter}
                                    onChangeNameFilter={this.onChangeNameFilter}
                                    filterName={this.state.filterName}
                                    filterState={this.state.filterState}
                                />
                                {this.props.filterFailure != "" && <StyledContact style={{ margin: '70px 20px' }}>{this.props.filterFailure}</StyledContact>}
                                < CardsContainer >
                                    {
                                        this.props.filteredContacts.map(contact =>
                                            <ContactInfo
                                                key={contact.id}
                                                id={contact.id}
                                                firstName={contact.firstName}
                                                lastName={contact.lastName}
                                                phoneNumber={contact.phoneNumber}
                                                email={contact.email}
                                                contactState={this.getStateName(contact.state)}
                                                handelEdit={() => this.handelEdit(contact.id)}
                                                handelDelete={() => this.handelDelete(contact.id, contact.firstName)}
                                                deleting={this.state.deleting}
                                            />
                                        )
                                    }
                                </CardsContainer>
                            </>
                        }
                    </ContactsContainer>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    filteredContacts: state.filteredContacts,
    loading: state.loading,
    error: state.error,
    filterFailure: state.filterFailure
})

const mapDispatchToProps = (dispatch) => ({
    fetchContacts: () => dispatch(fetchContacts()),
    filterContacts: (id, name, contacts) => dispatch(filterContacts(id, name, contacts)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts))