const express = require('express');
const app = express();
const PORT = 3001;
const userData = require('./MOCK_DATA.json');

app.listen(PORT, () => console.log('server is running'));
