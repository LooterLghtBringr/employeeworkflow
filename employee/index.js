const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const employees = [];

app.post("/:positionID/employee", async (req, res) => {
  console.log("POST EMPLOYEE");
  const employee = {
    id: randomBytes(4).toString("hex"),
    name: req.body.name,
    position: req.params.positionID
  }

  employees.push(employee);

  console.log(employee);

  axios.post("http://localhost:4001/events", employee);

  if(employee.position === '1' || employee.position === '2' || employee.position === '3' || employee.position === '4') res.send(employees)
  else res.status(417).send("Wrong Position ID")
})

app.delete("/employee/:employee_id", async (req, res) =>{
  const employeeToDelete = null;
  
  employees.forEach((employee) => {
    if(employee.id === req.params.employee_id)
    {
      employeeToDelete = employee;
      const index = employees.indexOf(employeeToDelete);
      employees.splice(index, 1);
    }
  });

  res.send(employeeToDelete);
})

app.listen(4000, () => {
  console.log('Listening on 4000');
});


/*
Employee Objekt 
==================== 
Employee ID: Zufälliges ID
EmployeeName: String 
EmplyeePosition: Integer (1-Engineer, 2-Support, 3-Verwaltung, 4-Rest) ====================
*/