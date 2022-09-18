const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/Empdetails");
const url = "mongodb+srv://ayeshasiddika:ayesha321@cluster0.2k9xok7.mongodb.net/employeedetails";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 


const Schema = mongoose.Schema

var empSchema = new Schema({
    name:{type:String},
    position:{type:String},
    officeLocation:{type:String},
    salary:{type:Number}
})
// mongoose model exxport
const EmpData=mongoose.model("employee",empSchema);

// export main code
module.exports=EmpData;
