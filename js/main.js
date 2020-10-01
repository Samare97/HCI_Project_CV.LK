$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
	refresh();

});

$(document).on("click","#btnSave",function(event) {

    $("#alertSuccess").text("");
    $("#alertSuccess").hide();
    $("#alertError").text("");
    $("#alertError").hide();

	var status = validateJobForm();
					if (status != true) {
						$("#alertError").text(status);
						$("#alertError").show();
						return;
                    }

                    if(status == true){
                        setTimeout(myfuction,3000);
                        document.getElementById("applyform").submit();
                    }
                });

                function validateJobForm() {
	   
                    if ($("#youremail").val().trim() == "") {
                        return "Insert email Address.";
                    }
                    
                    var statusemail = validateEmail();	
                    if( statusemail != true ){
                        return "Invalid Email Address"
                    }
                     
                    if($("#FormControlFile1").val().trim() == ""){
                        return "Insert Your CV file"
                    }
                    return true;
                
                }

                function validateEmail() {
                    var emailID = document.applyform.youremail.value;
                    atpos = emailID.indexOf("@");
                    dotpos = emailID.lastIndexOf(".");
                    
                    if (atpos < 1 || ( dotpos - atpos < 2 )) {
                       document.applyform.youremail.focus() ;
                       return false;
                    }
                    return( true );
                 }
                  function myfuction() {
                    window.location = "http://localhost/HCI_Project_CV.LK/apply_job.php";
                  }