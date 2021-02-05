var mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASEADMIN, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});
var conn = mongoose.Collection;

var adminSchema = new mongoose.Schema({

Firstname : {
    type: String,
    //required: true
},
Lastname: {
    type: String,
    //required: true
},
Username: {
    type: String,
   /* required: true,
    index: {
        unique: true
    }
    */ 
},
Mobilenumber : {
    type: String,
    //required: true,
   /* index: {
        unique: true
    } */
},
Email: {
    type: String,
   // required: true,
   /* index: {
            unique: true
        } */
},
Nationalid: {
    type: String,
    /*required: true,
    index: {
        unique: true
    } */
},
Imagename: {
    type: String,
    required: true

},
Password: {
    type: String
    // required: true
},
Onetimepassword: {
    type: String
  //  required: true    
}, 
Date: {
    type: Date,
    default: Date.now
}
});

var adminModel = mongoose.model('adminstaff', adminSchema);
module.exports = adminModel;