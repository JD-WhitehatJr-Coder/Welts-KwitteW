var firebaseConfig = {
  apiKey: "AIzaSyCRDDV1l730y2g25hqvP-OvnIXo09eEPwA",
  authDomain: "chatblox-b784b.firebaseapp.com",
  databaseURL: "https://chatblox-b784b-default-rtdb.firebaseio.com",
  projectId: "chatblox-b784b",
  storageBucket: "chatblox-b784b.appspot.com",
  messagingSenderId: "797169000505",
  appId: "1:797169000505:web:8958b6ed5e277887786de8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : " adding room name"
        });
  }
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

       //Start code
       console.log("Room Name -" +Room_names);
       row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '>#"+ Room_names +"</div><hr>";
             document.getElementById("output").innerHTML += row;
             //End code
});});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatbox_page.html";
}