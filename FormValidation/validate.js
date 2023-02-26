var input=document.getElementsByTagName("input");
for( var i in input)
{
             input[i].style
         }
        
         function highlightInput(elem)
         {
             elem.style.color="rgb(0 178 66)"; 
            elem.style.background="white"; 
            elem.style.outline="0 solid ";
            elem.style.border="0.2vw solid grey"
           }
         function redfocus(element)
           {
               element.style.border="1vw solid red"; 
            }
            //---------------Form Styling-----------------    
            document.body.style.backgroundColor="#66bd48";
            document.getElementById("t2").style.color="rgb(0 178 66)";
            document.getElementById("t1").style.color="#dfdfff";
            document.getElementById("t1").style.fontSize="2vw";
            document.getElementsByTagName("form")[0].style.backgroundColor="white";
            // document.getElementsByTagName("form")[0].style.paddingTop="8vh";
            document.getElementsByTagName("form")[0].style.margin="auto";
            document.getElementsByTagName("form")[0].style.marginTop="20vh";
            document.getElementsByTagName("form")[0].style.justifyContent="center";
            document.getElementsByTagName("form")[0].style.padding="3vw";
            document.getElementsByTagName("form")[0].style.display="flex";
            document.getElementsByTagName("form")[0].style.justifyContent="center";
            document.getElementsByTagName("form")[0].style.alignItems="center";
            document.getElementsByTagName("form")[0].style.flexDirection="column";
            document.getElementsByTagName("form")[0].style.width="40vw";
            document.getElementsByTagName("form")[0].style.height="25vw";
            var form=document.getElementsByClassName("form");
            
     for(var i=0;i<3;i++)
     {
         form[i].style.margin="2%";
         form[i].style.height="13%";
         form[i].style.width="80%";
         form[i].style.fontSize="2vw";
         form[i].style.backgroundColor="#f2f2f2";   
         form[i].style.border="0.1vw solid rgb(0 178 66)"; 
         form[i].style.color="#dfdfff"; 
         form[i].style.padding="2%"; 
         form[2].style.backgroundColor="rgb(0 178 66)";
         form[2].style.color="white";
        }

         //---------------Form Validating----------------- 
         var error=document.getElementsByClassName("error")
         
         for(i=0;i<2;i++){
         error[i].style.color="red";
         error[i].style.fontSize=" 2vw";
         error[i].style.alignItems="center"; 
         }
         // Defining a function to display error message
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }
        
        // Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    var email = document.LoginForm.email.value;
    var pass = document.LoginForm.pass.value;

  
    // Defining error variables with a default value
    var passErr = emailErr = true;
    // Validate email
    if (email == "") {
      printError("emailErr", "Please enter your Email");
    } else {
    // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        printError("emailErr", "Please enter a valid Email");
      } else {
        printError("emailErr", "");
        nameErr = false;
      }
    }
    // Validate password
    if (pass == "") {
      printError("passErr", "Please enter your password");
    } else {  
       var regex = /^[[a-z\s]{1,}[A-Z\s]{1,}]{7,}[0-9]+ +$/;
      if (regex.test(pass) === false) {
  
  
        printError("passErr",
         "password should contain small,capital letters,at least one number and shouldn't be less than 8 characters");
      } else {
        printError("passErr", "");
        emailErr = false;
      }
    }
  
    // Prevent the form from being submitted if there areany errors
    if ((passErr || emailErr ) == true) {
      return false;
    } 
  };