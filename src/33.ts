// Import necessary packages if any
// ...

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  const name = req.query.name;
  
  if (!name) {
    return res.status(400).send("Missing 'name' query parameter");
  }

  // Add your code here
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
