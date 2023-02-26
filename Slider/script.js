let Content = `
<div class="Slider">
            <img class="slide"src="images\\1.jpg" alt="img1">
            <img class="slide"src="images\\2.jpg" alt="img2">
            <img class="slide"src="images\\3.jpg" alt="img3">
            <img class="slide"src="images\\4.jpg" alt="img4">
            <img class="slide"src="images\\5.jpg" alt="img5">
            <img class="slide"src="images\\6.jpg" alt="img6">
            <img class="slide"src="images\\7.jpg" alt="img7">
            <img class="slide"src="images\\8.jpg" alt="img8">
            <img class="slide"src="images\\9.jpg" alt="img9">
            <img class="slide"src="images\\10.jpg" alt="img10">
            <img class="slide"src="images\\11.jpg" alt="img11">
            <img class="slide"src="images\\12.jpg" alt="img12">
            <img class="slide"src="images\\13.jpg" alt="img13">
    </div>
`;
let container=document.getElementById("container")
let Content3 = Content.repeat(3);
container.innerHTML=Content3;
// container.childNodes[1].classList.add("Left");
// container.childNodes[3].classList.add("Main");
// container.childNodes[5].classList.add("Right");
container.childNodes[1].setAttribute("id","Left");
container.childNodes[3].setAttribute("id","Main");
container.childNodes[5].setAttribute("id","Right");
// console.log(container.childNodes[1])
// console.log(container.childNodes[3])
// console.log(container.childNodes[5])
//create mannual 13 button 
let btn=`<button></button>`
let manual=document.getElementById("manual")
let btns = btn.repeat(13);
manual.innerHTML=btns;
for(a=0;a<13;a++)
{
manual.childNodes[a].setAttribute("id",a+1);
}
index=1
let timeout;
let i,j,k;

slideshow() 
function slideshow()
{
x=document.getElementById("Main").childNodes;
y=document.getElementById("Left").childNodes;
z=document.getElementById("Right").childNodes;
b=document.getElementById("manual").childNodes;
//  console.log(b)

for(i=1,j=25,k=3;i<x.length-1;i+=2)
{  
    j=(i<=1?25:i-2)
    k=(i>=25?1:i+2)
    x[i].style.display="none";
    y[j].style.display="none";
    z[k].style.display="none";
    // console.log(i,j,k)
}
if(index>x.length-1) {index=1,indey=25,indek=3}
indey=(index<=1?25:index-2)
indek=(index>=25?1:index+2)
x[index].style.display="block";
y[indek].style.display="block";
z[indey].style.display="block";
// console.log(index,indey,indek)
index+=2;
let n=0
for(n=0;n<13;n++){
    // b[n].style.border="0";
    b[n].style.border="1px solid purple";

}

 timeout=setTimeout(slideshow,2000)
}

//buttons
backbtn=document.getElementById("back")
nextbtn=document.getElementById("next")
tittle=document.getElementById("ss")
// console.log(backbtn,nextbtn,tittle)
// console.log(i,j,k)
backbtn.addEventListener('click' , ()=>{
    // i=(i<=1?25:(i>25?1:i-2))
    // j=(i<=1?25:i-2)
    // k=(i>=25?1:i+2)
    for(i=1,j=25,k=3;i<x.length-1;i+=2)
{  
    j=(i<=1?25:i-2)
    k=(i>=25?1:i+2)
    x[i].style.display="none";
    y[j].style.display="none";
    z[k].style.display="none";
    // console.log(i,j,k)
}
if(index>x.length-1) {index=1,indey=25,indek=3}
indey=(index<=1?25:index-2)
indek=(index>=25?1:index+2)
x[index].style.display="block";
y[indek].style.display="block";
z[indey].style.display="block";
// console.log(index,indey,indek)
index+=2;
   
    
})
nextbtn.addEventListener('click' , ()=>{
  
    for(i=1,j=25,k=3;i<x.length-1;i+=2)
{  
    j=(i<=1?25:i-2)
    k=(i>=25?1:i+2)
    x[i].style.display="none";
    y[j].style.display="none";
    z[k].style.display="none";
    // console.log(i,j,k)
}
if(index>x.length-1) {index=1,indey=25,indek=3}
indey=(index<=1?25:index-2)
indek=(index>=25?1:index+2)
x[index].style.display="block";
y[indek].style.display="block";
z[indey].style.display="block";
// console.log(index,indey,indek)
index+=2;
    
})

tittle.addEventListener('click' , ()=>{
    if(tittle.innerHTML=="Auto Slide Show")
    {
    clearTimeout(timeout)
    tittle.innerHTML="Manual Slide Show"
    }
    else
    {
        tittle.innerHTML="Auto Slide Show"
        slideshow()
    }
})
