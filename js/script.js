//original code credit to websitebeaver.com
// see their code at: https://github.com/WebsiteBeaver/simple-webrtc-video-chat-using-firebase/blob/master/js/script.js
//Create an account on Firebase, and use the credentials they give you in place of the following

//TO DO NOTE THERE IS NO STORAGE BUCKET, and the project ID has a suffix of 5f6de
//The storage bucket for the launchcode sister version is ackathon-video-chat.appspot.com
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3fDQFcJoftOMDzlQ43NOqb7CVPw7NIgM",
    authDomain: "hackathon-video-chat-5f6de.firebaseapp.com",
    databaseURL: "https://hackathon-video-chat-5f6de.firebaseio.com",
    projectId: "hackathon-video-chat-5f6de",
    storageBucket: "hackathon-video-chat-5f6de.appspot.com",
    messagingSenderId: "232620784837"
  };
  firebase.initializeApp(config);

var database = firebase.database().ref();
var yourVideo = document.getElementById("yourVideo");
var friendsVideo = document.getElementById("friendsVideo");
var yourId = Math.floor(Math.random()*1000000000);
//Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'TESTaccount','username': 'sharon.launchcode@gmail.com'}]};
//var pc = new RTCPeerConnection(servers);//
var pc = new webkitRTCPeerConnection({'iceServers':[{'urls':'stun:stun.l.google.com:19302'}]});

pc.onicecandidate = (event => event.candidate?sendMessage(yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

function sendMessage(senderId, data) {
    var msg = database.push({ sender: senderId, message: data });
    msg.remove();
}

function readMessage(data) {
    var msg = JSON.parse(data.val().message);
    var sender = data.val().sender;
    if (sender != yourId) {
        if (msg.ice != undefined)
            pc.addIceCandidate(new RTCIceCandidate(msg.ice));
        else if (msg.sdp.type == "offer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
              .then(() => pc.createAnswer())
              .then(answer => pc.setLocalDescription(answer))
              .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
        else if (msg.sdp.type == "answer")
            pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
    }
};

database.on('child_added', readMessage);

function showMyFace() {
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then(stream => yourVideo.srcObject = stream)
    .then(stream => pc.addStream(stream));
}

function showFriendsFace() {
  pc.createOffer()
    .then(offer => pc.setLocalDescription(offer) )
    .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})) );
}
