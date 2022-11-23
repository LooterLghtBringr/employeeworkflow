const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mf_employees = [];

app.get("/workflow/:mf_employee_id", async (req, res) =>{
  const employeeToReturn = null;

  mf_employees.forEach((emp) =>{
    if(emp.id === req.params.mf_employee_id){
      employeeToReturn = employee;
    }
  })

  res.send(employeeToReturn);
})

app.post("/mf_employee", async (req, res) =>{
  const employee = {
    id: req.body.id,
    name: req.body.name,
    position: req.params.positionID
  };

  await axios.post("http://localhost:4001/events", employee)

  mf_employees.push(employee);

  res.send(mf_employees);
})

app.listen(4001, () => {
  console.log('Listening on 4001');
});
