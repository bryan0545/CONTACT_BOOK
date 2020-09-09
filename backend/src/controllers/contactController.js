const contactModel = require('./../models/contacts');
const contactsCtl = {};

contactsCtl.getContacts = async (req, res) => {
    contacts = await contactModel.find();
    let returnedContacts = [];
    contacts.map( contact => returnedContacts.push(contact.transform()));

    res.json(returnedContacts);
};

contactsCtl.createContact = async (req, res) => {
    const { firstName, lastName, phoneNumber, email, state } = req.body;

    const newContact = new contactModel({
        firstName,
        lastName,
        phoneNumber,
        email,
        state
    })
    try {
        await newContact.save();
        res.json({
            message: "Contact Saved",
            status: "OK",
            data: "Contact Saved, ",
            error: null
        })
    } catch (error) {
        res.json({ message: error.message })
    }
};

contactsCtl.getContact = async (req, res) => {
    const contact = await contactModel.findById(req.query.idContact);
    res.json({
        message: "contact found",
        status: "OK",
        data: contact,
        error: null
    });
};

contactsCtl.updateContact = async (req, res) => {
    const { _id, firstName, lastName, phoneNumber, email, state } = req.body;

    await contactModel.findOneAndUpdate(_id, req.body);
    const contact = await contactModel.findById(_id);
    res.json({
        message: "Contact updated ",
        status: "OK",
        data: contact,
        error: null
    });
};

contactsCtl.deleteContact = async (req, res) => {
    await contactModel.findOneAndDelete(req.query.idContact);
    res.json({
        message: "Contact deleted",
        status: "OK",
        data: "Contact deleted",
        error: null
    })
};

module.exports = contactsCtl;
