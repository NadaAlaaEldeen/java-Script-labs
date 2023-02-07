class Person {
  constructor(full_name, money, sleep_mood, health_Rate) {
    this.name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;
    this.health_Rate = health_Rate > 100 ? this.health_Rate : 100;
  }

  //Declare Methods in prototype
  sleep(hours) {
    if (hours == 7) {
      this.sleep_mood = "Happy";
      console.log(this.sleep_mood);
    } else if (hours < 7) {
      this.sleep_mood = "Tired";
      console.log(this.sleep_mood);
    } else {
      this.sleep_mood = "Lazy";
      console.log(this.sleep_mood);
    }
  }
  Eat(meals) {
    switch (meals) {
      case 1:
        this.health_Rate = 50;
        console.log(this.health_Rate);
        break;
      case 2:
        this.health_Rate = 75;
        console.log(this.health_Rate);
        break;
      case 3:
        this.health_Rate = 100;
        console.log(this.health_Rate);
        break;
    }
  }
  Buy(items) {
    this.money = this.money - 10 * items;
    console.log(this.money);
  }
} //person

class Employee extends Person {
  constructor(
    full_name,
    money,
    sleep_mood,
    health_Rate,
    id,
    salary,
    email,
    workMood,
    isManger
  ) {
    super(full_name, money, sleep_mood, health_Rate);
    this.id = id;
    this.salary = salary;
    this.salary = salary < 1000 ? this.salary : 1000;
    this.email = email;
    this.workMood = workMood;
    this.isManger = isManger;
  }
  work(hours) {
    if (hours == 8) {
      this.workMood = "Happy";
      console.log(this.workMood);
    } else if (hours > 8) {
      this.workMood = "Tired";
      console.log(this.workMood);
    } else {
      this.workMood = "Lazy";
      console.log(this.workMood);
    }
  }
} //class employee

class office extends Employee {
  constructor(
    full_name,
    money,
    sleep_mood,
    health_Rate,
    id,
    salary,
    email,
    workMood,
    isManger,
    name
  ) {
    super(
      full_name,
      money,
      sleep_mood,
      health_Rate,
      id,
      salary,
      email,
      workMood,
      isManger
    );
    this.Employees = [];
    this.name = name;
  }
  hello()
  {
    console.log("Hello");
  }

  getAllEmployees() {
    for (let i = 0; i < Employees.length; i++) {
      alert(JSON.stringify(Employees[i]));
    }
  }
  getEmployee() {
    let searchkey = prompt("Please Enter key to search with: ");
    for (let i = 0; i < Employees.length; i++) {
      if (Employee[i].id == searchkey) alert(JSON.stringify(Employees[i]));
    }
  }
  add() {
    console.log("hi from add");
    let id = 1;
    this.id = id++;
    this.full_name = prompt("Enter  full_name");
    this.money = prompt("Enter  money");
    this.sleep_mood = prompt("Enter sleep_mood");
    this.health_Rate = prompt("Enter health_Rate");
    this.salary = prompt("Enter  salary");
    this.email = prompt("Enter email");
    this.workMood = prompt("Enter workMood");
    this.isManger = prompt(" is Manger...?");
    this.name = prompt("Enter office name");
    this.hire();
  }
  /*
    add() {
    console.log("hi from add");
    this.name = prompt("Enter office name");
    let p=new Employee();
    let id = 1;
    p.id = id++;
    p.full_name = prompt("Enter  full_name");
    p.money = prompt("Enter  money");
    p.sleep_mood = prompt("Enter sleep_mood");
    p.health_Rate = prompt("Enter health_Rate");
    p.salary = prompt("Enter  salary");
    p.email = prompt("Enter email");
    p.workMood = prompt("Enter workMood");
    p.isManger = prompt(" is Manger...?");
    this.hire(p);
  }
  
  */
  hire() {
    console.log("hi from hire");
    this.Employees.push(this);
    console.log("done hiring");
  }
  fire() {
    let key = prompt("Please Enter id: ");
    for (let i = 0; i < Employees.length; i++) {
      if (Employee[i].id == key) delete contacts[i];
    }
  }
} //office
