const { Router } = require('express');
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('./../controllers/contactController');
const { getStates } = require('./../controllers/statesController');
const router = Router();



//Contacts Routes
router.route('/LoadAllContact').get(getContacts);
router.route('/create').post(createContact);
router.route('/update').put(updateContact);
router.route('/delete').delete(deleteContact);
router.route('/LoadContact').get(getContact);

//States Routes
router.route('/LoadAllStates').get(getStates);

module.exports = router;