const express = require('express');
const path = require('node:path');

const app = express();

// Import routers 
const indexRouter = require('./routes/index');

// Set view template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set path of static assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Add routers to app
app.use('/', indexRouter);

app.listen(8080);
