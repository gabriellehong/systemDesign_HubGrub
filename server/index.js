const express = require('express')
const path = require('path');
const cors = require('cors');
// const mrouter = require('./mongo/mongoRoutes.js');
const expressStaticGzip = require("express-static-gzip");
const psqlrouter = require('./psql/psqlRouter');


const app = express()
const port = process.env.PORT || 3200;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static files
// app.use('/restaurants/:restaurantID', express.static(path.join(__dirname, '../public')))
// app.use('/restaurants/reviews_footer', express.static(path.join(__dirname, '../public')))

app.use(express.static('loaderio'))
app.use('/restaurants/reviews_footer', expressStaticGzip(path.join(__dirname, '../public'), {
	enableBrotli: true,
	orderPreference: ['br', 'gz']
}));


// app.use('/', mrouter)
app.use('/', psqlrouter)
app.listen(port, () => console.log(`App is listening on port ${port}!`))

