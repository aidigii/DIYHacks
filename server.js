//Requiring stuff
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

//setting up directory paths
app.use(express.static(__dirname + '/views/'))
app.use(express.static(__dirname + '/public/'))
app.use(express.static(__dirname + '/imgs/'))

const uri = "mongodb+srv://aidigii21:1234567890@cluster1-7bccy.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true })
var HackInfo, UserInfo
client.connect(err => {
	HackInfo = client.db("DIYDatabase").collection("hackathoninfo");
	UserInfo = client.db("DIYDatabase").collection("userinfo");
	client.close()
})

app.listen(3000, () => {
	console.log('listening on 3000')
})

app.get('/', (req, res) => {
	HackInfo.find().toArray((err, data) => {
		if (err) throw err
		app.local
		res.render('index', {data: data})
	})
})

app.post('/signup', (req, res) => {
  db.collection('userinfo').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
/**

app.get('/', (req, res) => {
  db.collection('hackathoninfo').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {hackathoninfo: result})
  })
})
**/



/*****************************************************/


