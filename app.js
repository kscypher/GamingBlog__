const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Define a route to render the 'home' view
app.get('/', (req, res) => {
    res.render('home');
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
