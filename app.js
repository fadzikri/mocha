const express = require('express')
const favicon = require('serve-favicon');

const app = express()
const port = 3000

app.use(favicon("favicon.ico"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const headers = {
    method: req.method,
    url: req.originalUrl,
  }

  res.render('pages/index', {
    headersOne: headers,
    headersTwo: req.headers,
  })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`)
})
