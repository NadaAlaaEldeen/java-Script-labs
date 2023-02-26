const weekday = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
let day = weekday[new Date().getDay()];
var watch1 = document.getElementById("watch1");
var watch2 = document.getElementById("watch2");
const dateTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ap = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    seconds =seconds.toString().padStart(2, '0');
    let mergeTime = hours + ':' + minutes + ':' + seconds+ ' ' + ap;
   return mergeTime;
   }
   var pa=document.getElementById("pa")

function updateWatch(){
    var val=dateTime(new Date());
    var clk=watch2.innerHTML
    watch2.innerHTML = val.substring(0,8);
    pa.innerHTML=val.substring(8,11)
    // console.log(pa.innerHTML)
}

setInterval(updateWatch,1000);


weekday.forEach(element => {
    watch1.innerHTML +=`<span>${element}</span>`
});

for(i=1;i<8;i++)
{ 
 if(weekday[i]==day)
    {
    watch1.childNodes[i].setAttribute("id","selected");
    }
    else
    {
    watch1.childNodes[i].setAttribute("id",""); 
    }
}
 


