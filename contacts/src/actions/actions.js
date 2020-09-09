import { getContacts } from './../api/api';

const fetchLoadingContacts = () => {
    return {
        type: "CONTACTS_LOADING"
    }
}

const fetchContactsSuccess = (contacts) => {
    return{
        type: "CONTACTS_SUCCESS",
        payload: contacts
    }
}       

const fetchContactsFailure = () => {
    return{
        type: "CONTACTS_FAILURE",
        payload: "Error loading contacts, try again later"
    }
}   

const fetchContacts = () => {
    return async dispatch => {
        dispatch(fetchLoadingContacts());
        try {
             const contacts = await getContacts(); 
             dispatch(fetchContactsSuccess(contacts));           
      
        } catch (error) {
            dispatch(fetchContactsFailure());
        }
    }
}

const filterContacts = (id, name, contacts) => (dispatch) => {
    let filteredContacts = id === 0 ? contacts : contacts.filter(contact => contact.state === id); 
    filteredContacts = name === '' ? filteredContacts : filteredContacts.filter(contact => `${contact.firstName} ${contact.lastName}`.indexOf(name) >= 0);
    
    if (filteredContacts.length > 0){
        return dispatch({
            type: "FILTER_CONTACTS",
            filteredContacts
        })
    }else{
        return dispatch({
            type: "FILTER_CONTACTS_FAILURE",
            payload: "There are no contacts with this filter"
        })
    }

}

export { filterContacts, fetchContacts }