// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const pgp = require('pg-promise')();

const app = express();
const port = 3001;


app.use(bodyParser.json());

const postgresConfig = {
  user: 'mishael',
  host: 'localhost',
  database: 'digisomo',
  password: 'mishael2019.',
  port: 5432,
};

const db = pgp(postgresConfig);

// Fetch and save data for each entity
app.get('/api/getMembers', async (req, res) => {
  try {
    const apiEndpoint = 'http://tathmini.live:8000/api/member/';
    const response = await axios.get(apiEndpoint);
    await saveDataToDatabase('members', response.data);
    // Fetch the updated data from the database
    const dbData = await db.any('SELECT * FROM members');
    res.status(200).json(dbData);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**app.get('/api/getFeedbacks', async (req, res) => {
    try {
      const apiEndpoint = 'http://tathmini.live:8000/api/feedback/create/';
      const response = await axios.post(apiEndpoint);
      const tableName = 'feedbacks';
      await createTableIfNotExists(tableName, response.data);
      await saveDataToDatabase(tableName, response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks', error);
      res.status(500).send('Internal Server Error');
    }
  });*/

app.get('/api/getDeployments', async (req, res) => {
    try {
      const apiEndpoint = 'http://tathmini.live:8000/api/deployment/';
      const response = await axios.get(apiEndpoint);
      await saveDataToDatabase('deployments', response.data);
       // Fetch the updated data from the database
      const dbData = await db.any('SELECT * FROM deployments');
      res.status(200).json(dbData);
      
    } catch (error) {
      console.error('Error fetching deployments', error);
      res.status(500).send('Internal Server Error');
    }
  });
app.get('/api/getStatlog', async (req, res) => {
    try {
      const apiEndpoint = 'http://tathmini.live:8000/api/statlog/';
      const response = await axios.get(apiEndpoint);
      await saveDataToDatabase('statlogs', response.data);
       // Fetch the updated data from the database
      const dbData = await db.any('SELECT * FROM statlogs');
      res.status(200).json(dbData);
    } catch (error) {
      console.error('Error fetching statlogs', error);
      res.status(500).send('Internal Server Error');
    }
  });
app.get('/api/getMessages', async (req, res) => {
    try {
      const apiEndpoint = 'http://tathmini.live:8000/api/message/';
      const response = await axios.get(apiEndpoint);
      await saveDataToDatabase('messages', response.data);
       // Fetch the updated data from the database
      const dbData = await db.any('SELECT * FROM messages');
      res.status(200).json(dbData);
    } catch (error) {
      console.error('Error fetching messages', error);
      res.status(500).send('Internal Server Error');
    }
  });
app.get('/api/getPlaylist', async (req, res) => {
    try {
      const apiEndpoint = 'http://tathmini.live:8000/api/playlist/';
      const response = await axios.get(apiEndpoint);
      await saveDataToDatabase('playlists', response.data);
       // Fetch the updated data from the database
      const dbData = await db.any('SELECT * FROM playlists');
      res.status(200).json(dbData);
    } catch (error) {
      console.error('Error fetching playlists', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  



async function createTableIfNotExists(tableName, data) {
  try {
    const columnDefinitions = generateColumnDefinitions(data);
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinitions})`;
    await db.none(createTableQuery);
    console.log(`Table "${tableName}" created if it didn't exist.`);
  } catch (error) {
    console.error(`Error creating table "${tableName}":`, error);
  }
}

function sanitizeNumericField(value) {
  return value === "" || value === null ? null : Number(value);
}

async function saveDataToDatabase(tableName, data) {
  try {
    const columns = Object.keys(data[0]);
    const columnsList = columns.map(column => column === 'group' ? `"group"` : column).join(', ');
    const valuesPlaceholders = columns.map((_, index) => `$${index + 1}`).join(', ');

    const insertQuery = `INSERT INTO ${tableName} (${columnsList}) VALUES (${valuesPlaceholders}) ON CONFLICT (id) DO NOTHING;`;

    for (const item of data) {
      const values = columns.map(column => {
        return ['latitude', 'longitude', 'GroupNo', 'Age'].includes(column)
          ? sanitizeNumericField(item[column])
          : item[column];
      });

      await db.none(insertQuery, values);
    }
    console.log(`Data saved to ${tableName} successfully.`);
  } catch (error) {
    console.error(`Error saving data to table "${tableName}":`, error);
  }
}


function generateColumnDefinitions(data) {
  const columns = Object.keys(data[0] || {}).map(column => `${column} VARCHAR(255)`);
  return columns.join(', ');
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
