require('dotenv').config();

const path = require('path')

const express = require('express');
const cors = require('cors');
const app = express();

const sendMail = require('./sendMail');

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(express.json());

// app.use(express.urlencoded({extended: false}));
// app.use('/public', express.static(path.join(__dirname, 'public')))

 // Priority serve any static files.
 app.use(express.static(path.resolve(__dirname, './client/build')));

// app.get('/', (req, res)=> {res.send("LOOK ITS WORKING!!!") })

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

app.post("/sendmail", (req, res) => {sendMail (req, res)});  
 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});