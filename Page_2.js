// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA7Pw2NKopq6BrCwyIAlITTlyikNkbIu3E",
      authDomain: "lastchance-dc641.firebaseapp.com",
      databaseURL: "https://lastchance-dc641-default-rtdb.firebaseio.com",
      projectId: "lastchance-dc641",
      storageBucket: "lastchance-dc641.appspot.com",
      messagingSenderId: "217935306667",
      appId: "1:217935306667:web:dfd60b39b6c9f621537cee"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



var username= localStorage.getItem("usernameK");
document.getElementById("whatever_you_want").innerHTML= "Welcome"+ username+"!";

