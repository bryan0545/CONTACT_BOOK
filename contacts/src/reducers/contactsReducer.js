
const initialState = {
    contacts: [],
    error: "",
    loading: false,
    filterFailure: "",
    filteredContacts: []
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACTS_LOADING":
            return {
                ...state,
                contacts: [],
                filteredContacts: [],
                error: "",
                loading: true,
            }
        case "CONTACTS_SUCCESS":
            return {
                ...state,
                contacts: action.payload,
                filteredContacts: action.payload,
                error: "",
                loading: false,
            }
        case "CONTACTS_FAILURE":
            return {
                ...state,
                contacts: [],
                filteredContacts: [],
                error: action.payload,
                loading: false,
            }
        case "FILTER_CONTACTS":
            return {
                ...state,
                filteredContacts: action.filteredContacts,
                filterFailure: ""
            }
        case "FILTER_CONTACTS_FAILURE":
            return {
                ...state,
                filteredContacts: [],
                filterFailure: action.payload
            }
        case "SEARCH_CONTACTS":
            return {
                ...state,
                filteredContacts: action.filteredContacts
            }
        default:
            return state;
    }
}

export default contactsReducer;