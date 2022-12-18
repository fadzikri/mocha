const express = require('express')
const favicon = require('serve-favicon');

const app = express()
const port = 3000

app.use(favicon("favicon.ico"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let header = req.headers;
  
  res.render('pages/index', {
    header
  })
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`)
})