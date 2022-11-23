const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
const mf_employees = {};
app.use(bodyParser.json());
app.use(cors());

app.get('/workflow / <mf_employee_id>', (req,res) => {
  res.send(req.body);
})

app.post('/mf_employee_id', async (req, res) => {
  const id = {};
  const name = {};
  const EmployeePosition = {};
  await axios.post('http://localhost:4001/events', {
    Data: {
      id,
      name,
      EmployeePosition
    }
  })
  console.log('Neuer MMA angelegt', req.body.employee);
  mf_employees[id] = {id, name, EmployeePosition};
  res.send({});
})

app.listen(4001, () => {
  console.log('Listening on 4001');
});


/*
b. [5%] GET / workflow /<mf_employee_id>: Liefert Daten zum angegebenen MA retour.
  c. [10%] POST /mf_employee/: ein neuer MA wird vom Event Bus an die Workflow Service
  weitergeleitet. Dieser wird in eine Locale Variable mf_employees gespeichert. Diese Liste ist
  äquivalent zu den emplyees Liste in dem Employee Service. Die Datenstruktur für den MA ist in
  beiden Services äquivalent.
   */