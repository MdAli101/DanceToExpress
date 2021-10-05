const express = require("express");
const path = require("path")
const pug = require('pug');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DanceContacts', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = 80;

//Defining Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    desc: String
});

//Compiling it to Modal
const contact = mongoose.model('contact', contactSchema);



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    var myData = new contact(req.body); //mongoose model is here
    myData.save().then(() => {
        res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("The item wasn't able to save to the dataBase");
    })
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});