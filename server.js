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

//Stich
const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential,
    UserPasswordAuthProviderClient,
    UserPasswordCredential,
    loginWithCredential,

} = require('mongodb-stitch-server-sdk');





const client1 = Stitch.initializeDefaultAppClient('diyhacks-nmmbf');


const emailPasswordClient = client1.auth
  .getProviderClient(UserPasswordAuthProviderClient.factory);


emailPasswordClient.registerWithEmail("and180008@utdallas.edu", "something")
  .then(() => console.log("Successfully sent account confirmation email!"))
  .catch(err => console.error("Error registering new user:", err));


const credential = new UserPasswordCredential("and180008@utdallas.edu", "something")
client1.auth.loginWithCredential(credential)
  // Returns a promise that resolves to the authenticated user
  .then(authedUser => console.log(`successfully logged in with id: ${authedUser.id}`))
  .catch(err => console.error(`login failed with error: ${err}`))











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


// const {
//   Stitch,
//   UserPasswordAuthProviderClient,
//   UserPasswordCredential
// } = require('mongodb-stitch-server-sdk') ;

// const stitchClient = Stitch.initializeDefaultAppClient("diyhacks-nmmbf");

// const emailPasswordClient = stitchClient.auth
//   .getProviderClient(UserPasswordAuthProviderClient.factory, "userpass");

// // Register a new application user when the user submits their information
// async function handleSignup() {
//   const email = registerEmailEl.value;
//   const password = registerPasswordEl.value;

//   try {
  
//     await emailPasswordClient.registerWithEmail(email, password)
//     showPostRegistrationState()
//     displaySuccess("Successfully registered. Check your inbox for a confirmation email.")

//   } catch(e) {
//     handleError(e)
//   }
// }

// // Authenticate an application user based on the submitted information
// async function handleLogin() {
//   const email = loginEmailEl.value;
//   const password = loginPasswordEl.value;
//   const credential = new UserPasswordCredential(email, password);
  
//   try {
  
//     await stitchClient.auth.loginWithCredential(credential);
//     const user = stitchClient.auth.user;
//     showLoggedInState();
//     displaySuccess(`Logged in as: ${user.profile.data.email}`)

//   } catch(e) {
//     handleError(e)
//   }
// }

// async function handleLogout() {
//   await stitchClient.auth.logout();
//   showControlPanel();
// }

// async function handleResendConfirmation() {
//   const email = resendConfirmationEmailEl.value;
//   await emailPasswordClient.resendConfirmationEmail(email);
//   showControlPanel();
// }

// // DOM Element Variables


// const resendConfirmationEl = document.getElementById("resend-confirmation");
// const controlPanelEl = document.getElementById("control-panel");
// const registerFormEl = document.getElementById("create-a-user");
// const loginFormEl = document.getElementById("login");
// const registerEmailEl = document.getElementById("create-a-user-email");
// const registerPasswordEl = document.getElementById("create-a-user-password");
// const resendConfirmationEmailEl = document.getElementById("resend-confirmation-email");
// const loginEmailEl = document.getElementById("login-email");
// const loginPasswordEl = document.getElementById("login-password");
// const notificationEl = document.getElementById("info");
// const loggedInEl = document.getElementById("logged-in");
// const postRegistrationEl = document.getElementById("finished-registration");

// const successEl = document.getElementById("success"); 
// const errorEl = document.getElementById("error");

// // Notification Functions
// function displayError(errorMessage) { clearNotifications(); errorEl.innerText = errorMessage; }
// function displaySuccess(successMessage) { clearNotifications(); successEl.innerText = successMessage }
// function clearNotifications() { [errorEl, successEl].forEach(el => el.innerText = "") }

// // Helper Functions
// function clearFields(fields) { fields.forEach(field => field.value = "") }
// function toggleHiddenElementById(id) { document.getElementById(id).classList.toggle("hidden"); }

// // UI State Transitions
// function showRegistrationForm() {
//   clearNotifications();
//   resendConfirmationEl.hidden = true;
//   controlPanelEl.hidden = true;
//   registerFormEl.hidden = false;
//   loggedInEl.hidden = true;
//   postRegistrationEl.hidden = true;
// }

// function showLoginForm() {
//   clearNotifications();
//   resendConfirmationEl.hidden = true;
//   controlPanelEl.hidden = true;
//   loginFormEl.hidden = false;
//   loggedInEl.hidden = true;
//   postRegistrationEl.hidden = true;
// }

// function showControlPanel() {
//   clearNotifications()
//   resendConfirmationEl.hidden = true;
//   controlPanelEl.hidden = false;
//   loginFormEl.hidden = true;
//   registerFormEl.hidden = true;
//   loggedInEl.hidden = true;
//   postRegistrationEl.hidden = true;
// }
// function showResendConfirmationForm() {
//   clearNotifications()
//   resendConfirmationEl.hidden = false;
//   controlPanelEl.hidden = true;
//   loginFormEl.hidden = true;
//   registerFormEl.hidden = true;
//   loggedInEl.hidden = true;
//   postRegistrationEl.hidden = true;
// }

// function showLoggedInState() {
//   clearFields([loginEmailEl, loginPasswordEl]);
//   clearNotifications()
//   resendConfirmationEl.hidden = true;
//   controlPanelEl.hidden = true;
//   loginFormEl.hidden = true;
//   registerFormEl.hidden = true;
//   loggedInEl.hidden = false;
//   postRegistrationEl.hidden = true;
// }

// function showPostRegistrationState() {
//   clearFields([registerEmailEl, registerPasswordEl]);
//   resendConfirmationEl.hidden = true;
//   controlPanelEl.hidden = true;
//   loginFormEl.hidden = true;
//   registerFormEl.hidden = true;
//   loggedInEl.hidden = true;
//   postRegistrationEl.hidden = false;
// }

// function setPostRegistrationState() {
//   // Clear registration form inputs then hide the form
//   clearFields([registerEmailEl, registerPasswordEl]);
//   toggleHiddenElementById("create-a-user");
//   return Promise.resolve()
// }

// function handleError(err) {
//   console.error(err)
//   const errType = err.message || "Error!"
//   const msg = ({
//     "invalid username/password": "Invalid username or password was entered. Please try again.",
//     "name already in use": "An account already exists for that email."
//   })[errType] || errType
//   displayError(msg);
// }


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





