var Hero = function(name, health, favFood, attackVal){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.attackVal = attackVal;
}

Hero.prototype = {
  talk: function(phrase){
    return phrase
  },
  eat: function(food){
    if(food.type === this.favFood && food.poisoned === false ){
      return this.health += (food.repValue*1.5) 
    }else if(food.poisoned === true ){
      return this.eatpoisoned(food)
    }else{
      return this.health += food.repValue
    }    
  },
  eatpoisoned: function(food){
    this.health -= food.repValue
    if (this.health < 0){
      this.health=0;
    }
  },
  fart: function(target){
    target.health = 0
  },
  attack: function(target){
    target.health -= this.attackVal
  }

}

module.exports = Hero;