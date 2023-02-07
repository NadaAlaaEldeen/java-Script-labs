//Objects Linking to Other Objects (OLOO)
const person = {
  init(full_name, money, sleep_mood, health_Rate ) {
    this.name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;
    this.health_Rate=health_Rate;
  },
  //Declare Methods in prototype
  sleep(hours) {
    if(hours==7)
    {
     this.sleep_mood = "Happy";
     console.log(this.sleep_mood);
    }
    else if(hours<7)
    {
     this.sleep_mood = "Tired";
     console.log(this.sleep_mood);
    }
    else 
    {
     this.sleep_mood = "Lazy";
     console.log(this.sleep_mood);
    }
 },
  Eat(meals) {
     switch(meals)
     {
         case 1: 
             this.health_Rate = 50;
             console.log(this.health_Rate);
             break;
         case 2 :
             this.health_Rate = 75;
             console.log(this.health_Rate);
             break;
         case 3:
             this.health_Rate = 100; 
             console.log(this.health_Rate);
             break;
     }
  },
  Buy(items) {	
     
         this.money=this.money - 10*items;
         console.log(this.money);
     
     
  }
}
const person4 = Object.create(person)
person4.init('nada', '100', 'Happy', '75')
console.log(person4)
console.log(person4.sleep(6))
console.log(person4.Eat(2)) 
console.log(person4.Buy(9))