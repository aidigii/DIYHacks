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
var HackInfo, UserInfo, db
client.connect(err => {
    db = client.db("DIYDatabase");
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
    var firstname = req.body.firstname; 
    var lastname =req.body.lastname; 
    var email = req.body.email; 
    var password =req.body.password; 
    var skills = req.body.skills;
  
    var data = { 
        firstname: firstname, 
        lastname:lastname, 
        email:email, 
        password:password,
        skills: skills
    } 

//create function that 
    
UserInfo.insertOne(data,function(err, collection){ 
        if (err) throw err;
        console.log(data);
        console.log("Record inserted Successfullyyyyy"); 
              
    }); 
          
    return res.redirect('/'); 
}) 


app.post('/submit', (req, res) => {  
  var title = req.body.title; 
  var month =req.body.month; 
  var days = req.body.days; 
  var location =req.body.location; 
  var notes =req.body.notes; 
  var skills = req.body.skills;
  var host = req.body.host; 
  var host_id =req.body.host_id; 

  var data = { 
      title: title,
      month: month,
      days: days,
      location: location,
      notes: notes,
      skills: skills,
      host: host,
      host_id: host_id
  } 
  
HackInfo.insertOne(data,function(err, collection){ 
      if (err) throw err;
      console.log(data);
      console.log("Record inserted Successfullyyyyy"); 
            
  }); 
        
  return res.redirect('/'); 
})

db.createUser(
    {
        user: "admin",
        pwd: "adminpassword",
        roles: [{
            role: "userAdminAnyDatabase",
            db: "admin"
        }]
        
    });
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





