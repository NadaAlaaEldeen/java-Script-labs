var Age ;

while(Age==null||Age=="")
{
    Age=prompt("Enter Your Age");
}

    if(Age<1)
    {
    alert("Not Available....");
    }
    else if(Age<10)
    {
    alert("You Are child....");
    }
    else if(Age<19)
    {
        alert("You Are Teenager....");
    }
    else if(Age<50)
    {
        alert("You Are Grow Up....");
    }
    else 
    {
        alert("You Are Old....");  
    }
   
    