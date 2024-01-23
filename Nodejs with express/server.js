/*
// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
});

// Define a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Nayan here!',
  name: 'Nayan',
  country: 'USA',
  age: 21,
  married: true,
  identification: '1234567890',
  gender: 'male',
  address: '123 Main St, Anytown USA',
  timestamp: Date.now()
})
}).get('/about', (req, res) => {
  res.send('This is the About page');
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log('Hello, Nayan here2!');
*/

const express = require('express')
const app = express()
const port_1 = process.env.PUBLIC_PORT
const port_2 = process.env.SECONDARY_PUBLIC_PORT

// define express apps that run on port_1 and port_2
let app1, app2
app1 = express()
app2 = express()

app1.get('/', (req, res) => {
	res.json({
		'app1': '1'
	})
})

app2.get('/', (req, res) => {
	res.json({
		'app2': '2'
	})
})

// if (require.main === module) {
// 	// add the listen for the express app
// 	app1.listen(3000, () => {
// 		console.log('server 3000 is running: app1')
// 	})
// 	app2.listen(4000, () => {
// 		console.log('server 4000 is running: app2')
// 	})
// }

// module.exports = {
// 	app1,
// 	app2
// }

app1.listen(3000, () => {
  console.log('server 3000 is running: app1')
})
app2.listen(4000, () => {
  console.log('server 4000 is running: app2')
})

