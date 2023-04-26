const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status:"successful",
  })
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))