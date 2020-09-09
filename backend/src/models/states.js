const {Schema, model} = require('mongoose');

const statesSchema = new Schema({
    key: { type: Number, required: true },
    value: { type: String, required: true }      
});

module.exports = model('States', statesSchema);
