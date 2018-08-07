  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD123PvPBnD0L4Nw6DKvlyjPzYIE9Sx_Jo",
    authDomain: "find-me-eba22.firebaseapp.com",
    databaseURL: "https://find-me-eba22.firebaseio.com",
    projectId: "find-me-eba22",
    storageBucket: "find-me-eba22.appspot.com",
    messagingSenderId: "511040371879"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRefNoCamera = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('nocameraform').addEventListener('submit', submitNoCameraForm);

// Submit form
function submitNoCameraForm(e){
  e.preventDefault();
  var latcoords = getInputValNoCamera('latcoords');
  var longcoords = getInputValNoCamera('longcoords'); 
  var name = getInputValNoCamera('name');
  var phone = getInputValNoCamera('phone');
  
  saveMessageNoCamera(latcoords, longcoords, name, phone);
  
    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
  document.getElementById('nocameraform').reset();
} 

// Function to get get form values
function getInputValNoCamera(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessageNoCamera(latcoords, longcoords, name, phone){
  var newMessageRefNoCamera = messagesRefNoCamera.push();
  newMessageRefNoCamera.set({
    latcoords: latcoords,
    longcoords:longcoords,
    name: name,
    phone:phone
  });
}
