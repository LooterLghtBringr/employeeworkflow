const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const employees = {};

app.get('/package.json', function (req, res) {
  res.send(employees)
})

app.post('/package.json', async function (req, res) {
  const id = randomBytes(4);
  const name = req.params.employee.name;
  const positionID = req.params.positionID;
  let EmployeePosition = {};

  if (positionID.equals('1'))
    EmployeePosition = 'Engineer';
  if (positionID.equals('2'))
    EmployeePosition = 'Support';
  if (positionID.equals('3'))
    EmployeePosition = 'Verwaltung';
  if (positionID.equals('4'))
    EmployeePosition = 'Rest';
  if (positionID < 1 || positionID > 4)
    res.status(417);

  employees[id] = {id, name, EmployeePosition};
  res.status(201).send(employee[id]);

  await axios.post('http://localhost:4002');
})


app.delete('/package.json', function (req, res) {
  console.log('MMA ' + req.params.name + ' mit der NR ' + req.params.id + ' wird gelöscht.')
  res.delete(employees[req.params.id]);
})

app.listen(4000, () => {
  console.log('Listening on 4000');
});

/*
Employee Objekt ====================
Employee ID: Zufälliges ID
EmployeeName: String Emplyee
Position: Integer (1-Engineer, 2-Support, 3-Verwaltung, 4-Rest)
====================

Entwickeln Sie einen Employee Service mit REST-API (URL-Pfad: /package), welcher folgende
Funktionen umfasst:
    a. [15%] POST /:positionID/emplyoee/: ein neuer MA wird angestellt.
1. PositionID steht für die Job Position und kann folgende Werte haben (1-Engineer, 2-Support, 3-
    Verwaltung, 4-Rest). Wenn ein MA erstellt wird, soll er/sie in der emplyees Variable gespeichert
sein (wir simulieren eigene DB im Service). Danach wird ein Event (siehe oben die Stuktur) an
den Event Bus weitergeleitet. POST /events/
2. Falls der neue MA eine falsche Position bekommt, wird ein HTTP-417-Statuscode retourniert.
    b. [10%] DELETE / emplyee /<emplyee_id>:
  Entfernt den MA aus dem Unternehmen (aus der employees Variable) und retourniert die Daten des
  MA.
 */