import axios from 'axios'

// const path = "https://2x6rvapc2h.execute-api.us-east-1.amazonaws.com";   // Use this to use AWS API
const pathe = "http://localhost:4000"; // Use this to use local API


export const getContacts = async () => (
    await (await axios.get(`${pathe}/dev/contact/LoadAllContact`)
        .catch(error => console.log(error))).data
)

export const getContact = async (id) => (
    await ( await axios.get(`${pathe}/dev/contact/LoadContact?idContact=${id}`)
        .catch(error => console.log(error))).data
)

export const postContacts = async (body) => (
    await (await axios.post(`${pathe}/dev/contact/create`, body)).data
)

export const putContacts = async (body) => (
    await (await axios.put(`${pathe}/dev/contact/update`, body)).data
)

export const deleteContacts = async (id) => (
    await (await axios.delete(`${pathe}/dev/contact/delete?idContact=${id}`)).data
)

export const getStates = async () => (
    await (await axios.get(`${pathe}/dev/contact/LoadAllStates`)).data
)