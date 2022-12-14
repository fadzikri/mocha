const express = require('express')
const favicon = require('serve-favicon');
const { detect } = require('detect-browser');

const app = express()
const port = 3000

app.use(favicon("./views/favicon.ico"));
app.use(express.static("./views"))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const browser = detect(req.headers['user-agent']);

  const headers = {
    method: req.method,
    url: req.originalUrl,
    browser: browser.name,
    OS: browser.os
  }

  res.render('index', {
    headersOne: headers,
    headersTwo: req.headers,
  })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`)
})
