const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');


const PORT = process.env.port || 3000;
const routes = require('./routes/web');
// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(express.json());
db.connect();
app.use('/', routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});