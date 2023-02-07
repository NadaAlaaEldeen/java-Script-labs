//Factory functions
function person (full_name, money, sleep_mood, health_Rate) {
  return {
    full_name,
    money,
    sleep_mood,
    health_Rate,
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
}

const person3 = person('nada', '100', 'lazy', '75')
console.log(person3)
console.log(person3.sleep(3))
console.log(person3.Eat(1)) 
console.log(person3.Buy(4))