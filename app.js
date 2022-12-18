const express = require('express')
const favicon = require('serve-favicon');

const app = express()
const port = 3000

app.use(favicon("favicon.ico"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const headers = {
    hostname: req.hostname,
    method: req.method,
    url: req.originalUrl,
    protocol: req.protocol,
    secure: req.secure,
    xhr: req.xhr,
    fresh: req.fresh,
    stale: req.stale,
    ip: req.ip,
  }

  const response = {
    ['header-sent']: res.headersSent
  }

  res.render('pages/index', {
    headersOne: headers,
    headersTwo: req.headers,
    response
  })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`)
})