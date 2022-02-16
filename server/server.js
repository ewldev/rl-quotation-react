require('dotenv').config();

const path = require('path')

const express = require('express');
const app = express();

// const sendMail = require('./utils/sendMail');

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {res.send("LOOK ITS WORKING") })

app.post("/sendmail", (req, res) => {sendMail (req, res)});  
 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});