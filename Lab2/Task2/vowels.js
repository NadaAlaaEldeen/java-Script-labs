var str ;
 do
 {
 str = prompt("Enter String");
 }while(str==null ||str=="")

 var vowels = {
      a: 0,
      e: 0,
      o: 0,
      u: 0,
      i: 0
  };
  for(let i=0;i<str.length;i++)
{
  if(str.charAt(i)=='a'||str.charAt(i)=='A')
  {
    vowels.a++;
  } 
  else if(str.charAt(i)=='e'||str.charAt(i)=='E')
  {
    vowels.e++;
  } 
  else if(str.charAt(i)=='o'||str.charAt(i)=='O')
  {
    vowels.o++;
  } 
  else if(str.charAt(i)=='u'||str.charAt(i)=='U')
  {
    vowels.u++;
  } 
  else if(str.charAt(i)=='i'||str.charAt(i)=='I')
  {
    vowels.i++;
  } 
}
//console.log(vowels);
alert('String you Entered is:'+str+'\n'
           +'A is :'+vowels.a+'\n'
           +'E is :'+vowels.e+'\n'
           +'O is :'+vowels.o+'\n'
           +'U is :'+vowels.u+'\n'
           +'I is :'+vowels.i+'\n'); 