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


app.post('/hackPost', (req, res)=>{
    var title = req.body.title;
    var location = req.body.location;
    var description = req.body.description;
    var host = host
    var month = req.body.month;
    var days = req.body.days;
    var skills = req.body.skills;


    var info = {
      title : title,
      location : location,
      description : description,
      host : host,
      month : month,
      days : days,
      skills : skills
    }

    HackInfo.insertOne(info, function(err, collection){
      if(err){
        throw err;
      }
      console.log(info);
      console.log("Hackathon posted!");
    });

    return res.redirect('/');

})

app.post('/signup', (req, res) => { 
    var firstname = req.body.firstname; 
    var lastname = req.body.lastname; 
    var username = req.body.username;
    var email = req.body.email; 
    var password = req.body.password; 
    var skills = req.body.skills;
  
    var data = { 
        firstname: firstname, 
        lastname:lastname, 
        username : username,
        email:email, 
        password:password,
        skills: skills
    } 
    
UserInfo.insertOne(data,function(err, collection){ 
        if (err) throw err;
        console.log(data);
        console.log("Record inserted Successfullyyyyy"); 
              
    }); 
          
    return res.redirect('/'); 
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





