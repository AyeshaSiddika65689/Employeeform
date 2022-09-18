const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const EmpData = require('./src/model/empData');


const app = express();
const PORT=3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/insert',(req,res)=>{
    console.log(req.body);

    var employee={
        name: req.body.employee.name,
        position: req.body.employee.position,
        officeLocation: req.body.employee.officeLocation,
        salary:req.body.employee.salary
    };

    var employee= EmpData(employee)
    employee.save();
});





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})