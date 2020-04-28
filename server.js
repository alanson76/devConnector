const express = require('express');

const app = express();

//routes
app.get('/', (req, res) => res.send('API Running'));

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
