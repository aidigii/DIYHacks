
//configures firebase into the project 
const firebaseConfig = {
  apiKey: "AIzaSyBP-agFonqibwQaBBCQtoyvVzRQzgyR5fo",
  authDomain: "diyhacks-c419f.firebaseapp.com",
  databaseURL: "https://diyhacks-c419f.firebaseio.com",
  projectId: "diyhacks-c419f",
  storageBucket: "diyhacks-c419f.appspot.com",
  messagingSenderId: "810032620059",
  appId: "1:810032620059:web:c6c1c48cef2779166acebe",
  measurementId: "G-C9Y54R9YB7"
};

//configures firestore 
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();


//setting up directory paths
app.use(express.static(__dirname + '/views/'))
app.use(express.static(__dirname + '/public/'))
app.use(express.static(__dirname + '/imgs/'))



app.listen(3000, () => {
	console.log('listening on 3000')
})



// app.get('/', (req, res) => {
// 	HackInfo.find().toArray((err, data) => {
// 		if (err) throw err
// 		app.local
// 		res.render('index', {data: data})
// 	})
// })


// app.post('/hackPost', (req, res)=>{
//     var title = req.body.title;
//     var location = req.body.location;
//     var description = req.body.description;
//     var host = host
//     var month = req.body.month;
//     var days = req.body.days;
//     var skills = req.body.skills;


//     var info = {
//       title : title,
//       location : location,
//       description : description,
//       host : host,
//       month : month,
//       days : days,
//       skills : skills
//     }

//     HackInfo.insertOne(info, function(err, collection){
//       if(err){
//         throw err;
//       }
//       console.log(info);
//       console.log("Hackathon posted!");
//     });

//     return res.redirect('/');

// })

// var signups = []

// app.post('/signup', (req, res) => { 
//     var firstname = req.body.firstname; 
//     var lastname = req.body.lastname; 
//     var username = req.body.username;
//     var email = req.body.email; 
//     var password = req.body.password; 
//     var skills = req.body.skills;
// //  signups = [req.body.signups];
  
//     var data = { 
//         firstname: firstname, 
//         lastname:lastname, 
//         username : username,
//         email:email, 
//         password:password,
//         skills: skills,
//     //  signups: signups,
//     } 

// //create function that 
    
// UserInfo.insertOne(data,function(err, collection){ 
//         if (err) throw err;
//         console.log(data);
//         console.log("Record inserted Successfullyyyyy"); 
              
//     }); 
          
//     return res.redirect('/'); 
// })

// app.post('/login', (req,res) => {
//   var username = req.body.username;
//   var password = req.body.password;

//   var data = {
//     username: username,
//     password: password,
//   }
//   UserInfo.findOne({username: username}, function(err, user) {
    
//     if(!user) {
//       res.redirect('/');
//     } 
    
//     if (user && user.password === password){
//       res.redirect('/');
//     }
//     else {
//       res.redirect('/');    
//     } 
                 
// });
// })


// function addUsertoHack(userId){

//     signups.push(userId);

// }

// app.post('/submit', (req, res) => {  
//   var title = req.body.title; 
//   var month =req.body.month; 
//   var days = req.body.days; 
//   var location =req.body.location; 
//   var notes =req.body.notes; 
//   var skills = req.body.skills;
//   var host = req.body.host; 
//   var host_id =req.body.host_id; 

//   var data = { 
//       title: title,
//       month: month,
//       days: days,
//       location: location,
//       notes: notes,
//       skills: skills,
//       host: host,
//       host_id: host_id
//   } 
  
// HackInfo.insertOne(data,function(err, collection){ 
//       if (err) throw err;
//       console.log(data);
//       console.log("Record inserted Successfullyyyyy"); 
            
//   }); 
        
//   return res.redirect('/'); 
// })



