const express = require('express');
const bodyParser = require('body-parser');
const pgAccommodationsRouter = require('./routes/pgAccommodations');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pgAccommodations', pgAccommodationsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const router = express.Router();

// GET request to retrieve all PG accommodations
router.get('/', (req, res) => {
  // Your logic here to retrieve all PG accommodations from the database
  res.send('All PG accommodations');
});

// POST request to create a new PG accommodation
router.post('/', (req, res) => {
  // Your logic here to create a new PG accommodation in the database
  res.send('New PG accommodation created');
});

// GET request to retrieve a specific PG accommodation by ID
router.get('/:id', (req, res) => {
  // Your logic here to retrieve a specific PG accommodation by ID from the database
  res.send(`PG accommodation with ID ${req.params.id}`);
});

// PUT request to update a specific PG accommodation by ID
router.put('/:id', (req, res) => {
  // Your logic here to update a specific PG accommodation by ID in the database
  res.send(`PG accommodation with ID ${req.params.id} updated`);
});

// DELETE request to delete a specific PG accommodation by ID
router.delete('/:id', (req, res) => {
  // Your logic here to delete a specific PG accommodation by ID from the database
  res.send(`PG accommodation with ID ${req.params.id} deleted`);
});

module.exports = router;
