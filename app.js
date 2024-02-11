// for .env files
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

// static folder
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main');

// tell the computer to read the files
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});