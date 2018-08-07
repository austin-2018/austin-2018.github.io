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
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('nocameraform').addEventListener('submit', submitNoCameraForm);

// Submit form
function submitNoCameraForm(e){
  e.preventDefault();
  var name = getInputValNoCamera('latcoords');
  var phone = getInputValNoCamera('longcoords'); 
  var name = getInputValNoCamera('name');
  var phone = getInputValNoCamera('phone'); 
} 

// Function to get get form values
function getInputValNoCamera(id){
  return document.getElementById(id).value;
}
