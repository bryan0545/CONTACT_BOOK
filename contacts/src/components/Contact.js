import React, { Component } from 'react'
import { getStates, getContact, postContacts, putContacts } from './../api/api'
import { withRouter } from 'react-router-dom'
import ContactContainer from '../containers/ContactContainer'

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            state: null,
            states: [],
            editing: false,
            statesFailure: false,
            loadingData: false,
            stateComponent: false,
            submitting: false,
            title: ""
        }
    }

    async getContactsStates() {
        try {
            this.setState({
                loadingData: true,
            })
            const contactStates = await getStates();
            this.setState({
                states: contactStates.data,
                statesFailure: false,
                state: contactStates.data[0].key,
                loadingData: false,
            })
        } catch (error) {
            this.setState({
                statesFailure: true,
                loadingData: false,
            })
        }
    }

    async getContact(id) {
        const contact = await getContact(id);
        this.setState({
            id: contact.data.id,
            firstName: contact.data.firstName,
            lastName: contact.data.lastName,
            phoneNumber: contact.data.phoneNumber,
            email: contact.data.email,
            state: contact.data.state,
            editing: true,
            stateComponent: true,
            title: "Edit contact"
        })
    }

    async checkTypeComponent() {
        if (this.props.match.params.id) {
            await this.getContact(this.props.match.params.id)
        } else {
            this.setState({
                stateComponent: true,
                title: "New contact"
            })
        }
    }

    async componentDidMount() {
        await this.getContactsStates();
        await this.checkTypeComponent();
    }

    isSubmitting(value) {
        this.setState({
            submitting: !value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        this.isSubmitting(this.state.submitting);
        let resp = "";
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            state: this.state.state,
        }

        if (this.state.editing) {
            body["id"] = this.state.id;
            resp = await putContacts(body);
            console.log(resp)
        } else {
            resp = await postContacts(body);
            console.log(resp)
        }

        if (resp.status == "OK") {
            window.alert(resp.message)
            this.props.history.goBack();
        }
        else {
            window.alert(resp.error)
            this.isSubmitting(this.state.submitting);
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCancel = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
            <ContactContainer
                loadingData={this.state.loadingData}
                statesFailure={this.state.statesFailure}
                stateComponent={this.state.stateComponent}
                onSubmit={this.onSubmit}
                title={this.state.title}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                phoneNumber={this.state.phoneNumber}
                email={this.state.email}
                state={this.state.state}
                states={this.state.states}
                onChange={this.onChange}
                submitting={this.state.submitting}
                onCancel={this.onCancel}
            />
        )
    }
}

export default withRouter(Contact)
