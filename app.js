const express = require('express')
const favicon = require('serve-favicon');

const app = express()
const port = 3000

app.use(favicon(`${__dirname}/favicon.ico`));

app.get('/', (req, res) => {
  res.json(req.headers);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})