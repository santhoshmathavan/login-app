// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDElP6s1q_Mn2f-qcGO8xag5KCyThYeXY0",
    authDomain: "form-8aa97.firebaseapp.com",
    projectId: "form-8aa97",
    storageBucket: "form-8aa97.appspot.com",
    messagingSenderId: "498653216198",
    appId: "1:498653216198:web:e238c710177521b46206c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
    }

    function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));	
        
    alert("Signed In");
    }
    
    function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
    }
    
    auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
	});



