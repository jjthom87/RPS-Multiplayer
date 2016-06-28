  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRtZRXC1efUX4HKuEveXAQ8VfZuZv1AyM",
    authDomain: "rock-paper-scissors-3ef59.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-3ef59.firebaseio.com",
    storageBucket: "",
  };

  firebase.initializeApp(config);

  var dbRef = firebase.database().ref();//created a variable to reference the database
  console.log("DbRef is " + dbRef);

  //initial values
  var PlayerOne = dbRef.child('user1');
  var PlayerTwo = dbRef.child('user2');
  var playerOneEnter = "";
  var playerTwoEnter = "";
  var Wins = 0;
  var Losses = 0;
 		
PlayerOne.set({
Name: '',
Wins: 0,
Losses: 0	
});

PlayerTwo.set({
Name: '',
Wins: 0,
Losses: 0
});

  $('#enterPlayer').on('click', function() {

  	$('#playerName').hide();
  	
  	playerEnter = $('#nameInput').val().trim();
  	console.log("Player Enter Reads: " + playerEnter);

		  dbRef.push({
		  	name: playerEnter
		  })

	});

  dbRef.on("value", function(snapshot){
  		console.log("Snapshot.val() is " + snapshot.val());
  		console.log("Snapshot.val() name is " + snapshot.val().name);
  		
  		$('#boxOne').html(snapshot.val().name);

  }, function(errorObject){
  		console.log("Errors Handled: " + errorObject.code);
  });