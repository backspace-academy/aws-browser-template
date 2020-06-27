// Self-invoking anonymous function
(function($) {
    'use strict';

    // Region must be defined
    const region = 'us-east-1';
    var readyAWS = false;

    // aws variables
    //var lambda;


	// Show the buttons
    $('#buttonSection').show();
    
	// Click event listeners
	$('#btnSignIn').click(function() {
        signIn();
      });

	// Click event listeners
	$('#btnSend').click(function() {
        sendCmd();
      });      
    
	/***************** The main code ******************/

	// Sign In
	function signIn(){
        $('#signInModal').modal("hide"); // Hide the modal window
        AWS.config.update({
            accessKeyId: $('#inputAccessID').val(), // Get Access keys from modal window
            secretAccessKey: $('#inputSecret').val(), 
            region: region
        });
        msgOut(("Created credentials Access ID " + JSON.stringify($('#inputAccessID').val())));
        readyAWS = true; 
    }

	// Send command
	function sendCmd(){
        if (readyAWS){
            msgOut("Sending command");
            // Instantiate aws sdk service objects now that the credentials have been updated.
            //lambda = new AWS.Lambda();
                  
        }
    }    

	function msgOut(message){
        $("#outputBox").append(message + "\n");
        console.log(message);
    }

// End 	self-invoking anonymous function
})(jQuery);
