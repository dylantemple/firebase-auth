function handleAuthChanges() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = "home.html";
    } else {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        console.log(error)
        alert("An error has occoured")
      });
    }
  });

}


function handleSignIn() {
  const email= document.getElementById("email").value
  const pass = document.getElementById("password").value
  firebase.auth().signInUserWithEmailAndPassword(email,pass).catch(function(error){
	const errcode = error.code
	const errmsg = error.message
	alert(errmsg)
  });
  console.log("Sign in" + email)
}

function handleSignUp() {
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email,pass).catch(function(error){
	const errcode = error.code
	const errmsg = error.message
	alert(errmsg)
  });
  console.log("Sign up" + email)
}

window.onload = () => {
  handleAuthChanges()
}
