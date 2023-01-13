
 var fname = prompt("Enter Your First name");
 var lname = prompt("Enter Your Last name");

 if((fname.length>0 && fname!=null)&& (lname.length>0 && lname!=null))
 {
    var isName = confirm('Is '+' '+fname+lname +' is Your correct name?')
      if(isName)
      {
        var BD = prompt("Enter Your BirthDate");
        var age = 2023 - BD
        alert("Welcom" + " " + fname + " " + lname + " " 
                    + "you are" + " " + age + " "+"years old");
      }
      else
      {
        var fname = prompt("Enter Your First name");
        var lname = prompt("Enter Your Last name");
        
      }
 }
 else
 {
    alert("Empty Field...!");
 
 }


 