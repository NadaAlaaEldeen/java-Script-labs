window.onload = function () {

    var xhtml = new XMLHttpRequest();
    
    xhtml.onload = function (params) {
      var allData = JSON.parse(this.responseText);
      var persons = allData.data;
      var usersData = document.getElementById("Data");
      for(person of persons){
        console.log(person);
        usersData.innerHTML += `<span>${person.email}
         <img src=${person.avatar}>
         
         </span>`
        console.log(usersData);
      }
    }
    xhtml.open("GET","https://reqres.in/api/users?page=2")
    xhtml.send();
    }