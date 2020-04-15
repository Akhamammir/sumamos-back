var mongoose = require('mongoose');
var kittySchema = new mongoose.Schema({
    Name:{
        fNames: String,
        pName: String,
        mName: String
    },
    street: String, number: String,
    city: String, hood: String,
    gender: String, date: String,
    town: String, email: String,
    cp: String, phone: String,
    maritalStatus:String, ocupation:String,
    familyMebers:String,currentSituacion:String,
    housingStatus:String, housingStatusOther:String,
    housingMaterial:String,housingMaterialOther:String,
    housingRooms:String,housingServices:String,
});
module.exports = {
    User: mongoose.model('User', kittySchema, 'Users'),
}