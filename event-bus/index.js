const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) =>{
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4001/mf_employee", event).catch((err) =>{
    console.log(err.message);
  })

})

app.listen(4002, () => {
  console.log('Listening on 4002');
});

/*
Event Objekt ====================
EventType: String (z.B. createEmplyee, deleteEmplyee) 
Employee ID: Zufälliges ID 
EmployeeName: String 
EmplyeePosition: Integer (1-Engineer, 2-Support, 3-Verwaltung, 4-Rest)
*/