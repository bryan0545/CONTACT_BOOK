const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    state: { type: Number, required: true },  
});

contactSchema.method('transform', function() {
    let obj = this.toObject(); 
    //Rename fields
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
 
    return obj;
});

module.exports = model('Contacts', contactSchema);
