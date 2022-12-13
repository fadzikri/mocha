const express = require('express')
const favicon = require('serve-favicon');

const app = express()
const port = 3000

app.use(favicon(`${__dirname}/favicon.ico`));
app.use(express.json())

app.get('/', (req, res) => {
  console.dir(req.headers)
  res.json({
    "message": "Hello World!"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})