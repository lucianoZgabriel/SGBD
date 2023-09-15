const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const user = require('./models/Users')
const mysql = require('mysql2')

const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

conn.sync().then(() => {
  app.listen(3000)
}).catch((err) => { console.log(err) })

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'cancela123',
//   database: 'nodemysql'
// })

// conn.connect(function(err) {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Conectou ao banco com sucesso.')    
// })

