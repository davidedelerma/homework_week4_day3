var Baddie = function( name, health, attackVal, rage){
  this.name = name;
  this.health = health;
  this.attackVal = attackVal;
  this.rage = rage;
}

Baddie.prototype = {
  attack: function (target){
    target.health -= this.attackVal
  },
  rageAttack: function (target){
    if (this.rage >= 40){
      this.rage -= 40;
      target.health -= (this.attackVal * 4)
    }else if(this.rage < 40){
    return "cannot rage"
    }
  }
}

module.exports = Baddie;
