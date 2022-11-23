const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async function (req, res) {
  const event = req.body;
  await axios.post('http://localhost:4001/events', event)
  res.send({status: 'ok'});
})

app.listen(4002, () => {
  console.log('Listening on 4002');
});

/*
Entwickeln Sie für den MA Workflow einen Event Bus und einen Workflow Service Service mit RESTAPI
(URL-Pfad: /workflow), welcher folgende Funktionen umfasst:
a. [10%] POST /events/: Event Bus Service um die Pakete vom Emplyoee Service an den Workflow
Service weiterzuleiten. Benutzen sie dafür axios und die Async-Aufrufe wie in den Übungen gelernt
b. [5%] GET / workflow /<mf_employee_id>: Liefert Daten zum angegebenen MA retour.
  c. [10%] POST /mf_employee/: ein neuer MA wird vom Event Bus an die Workflow Service
  weitergeleitet. Dieser wird in eine Locale Variable mf_employees gespeichert. Diese Liste ist
  äquivalent zu den emplyees Liste in dem Employee Service. Die Datenstruktur für den MA ist in
  beiden Services äquivalent.
 */