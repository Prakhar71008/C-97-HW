var firebaseConfig = {
      apiKey: "AIzaSyB6eWwDkyjBnB9Kox0IfXnM8NQAlyUXokA",
      authDomain: "helloapp-3f72f.firebaseapp.com",
      projectId: "helloapp-3f72f",
      storageBucket: "helloapp-3f72f.appspot.com",
      messagingSenderId: "302567397310",
      appId: "1:302567397310:web:f0fe499246fe8c5acecbef"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
