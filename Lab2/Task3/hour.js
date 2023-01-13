
 var time = prompt("Enter Time......");
check(time);
function check(time)
{
 if((time.length>0 && time!=null && time<=24))
 {
    if(time==0)
    {alert("Now it's 12AM");}
    else if(time>0&&time<12)
    {
      alert("Now it's "+time+"AM");
    }
    else
    {
      time=time-12;
      alert("Now it's "+time+"PM");
    }
  }
 else
  {
    alert("Invalid input Number...!");

    time = prompt("Re-Enter Time......");
    check(time);
    
 }

}
 