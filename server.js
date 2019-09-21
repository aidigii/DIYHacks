const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb+srv://aidigii21:1234567890@cluster1-7bccy.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err)
  db = client.db('DIYDatabase') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  db.collection('hackathoninfo').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/quotes', (req, res) => {
  db.collection('hackathoninfo').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('hackathoninfo').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {hackathoninfo: result})
  })
})




/*****************************************************/


