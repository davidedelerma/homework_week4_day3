var Hero = require ('../hero');
var Food = require ( '../food');
var Rat = require ( '../rat');
var Baddie = require ( '../baddie');

var assert = require('chai').assert;

describe('hero', function(){

  it("has a name", function(){
    var hero1 = new Hero ( "Conan", 100, "chicken")
    assert.equal( "Conan", hero1.name)
  })
  it("can talk", function(){
    var hero1 = new Hero ( "Conan", 100, "chicken")

    assert.equal( "phrase", hero1.talk("phrase"))
  })
  it("can eat", function(){
    var food1 = new Food ("beef", 50)
    var hero1 = new Hero ( "Conan", 100, "chicken")
    hero1.eat(food1);
    assert.equal( 150, hero1.health)
  })
  it("can eat fav food", function(){
    var food1 = new Food ("beef", 50)
    var food2 = new Food ("chicken", 50)
    var hero1 = new Hero ( "Conan", 100, "chicken")
    hero1.eat(food2);
    assert.equal( 175, hero1.health)
  })
  it("rat has name", function(){
    var rat1 = new Rat ( "Roland" )
    assert.equal( "Roland", rat1.name)
  })
  it("rat can touch food", function(){
    var rat1 = new Rat ( "Roland" )
    var food1 = new Food ("chicken", 50)
    rat1.touch(food1)
    assert.equal( true, food1.poisoned)
  })
  it("hero eats poisoned food", function(){
    var rat1 = new Rat ( "Roland" )
    var food1 = new Food ("chicken", 50)
    var hero1 = new Hero ("Conan", 100, "chicken")
    rat1.touch(food1)
    hero1.eat(food1)
    assert.equal( 50, hero1.health)
  })
  it("baddie attacks hero", function(){
    var hero1 = new Hero ("Conan", 100, "chicken")
    var baddie1 = new Baddie ("General Sheng", 100, 10)
    baddie1.attack(hero1)
    assert.equal( 90, hero1.health)
  })
  it("hero farts on baddie", function(){
    var hero1 = new Hero ("Conan", 100, "chicken")
    var baddie1 = new Baddie ("General Sheng", 100, 10)
    hero1.fart(baddie1)
    assert.equal( 0, baddie1.health)
  })
  it("hero attacks baddie", function(){
    var hero1 = new Hero ("Conan", 100, "chicken", 20)
    var baddie1 = new Baddie ("General Sheng", 100, 10)
    hero1.attack(baddie1)
    assert.equal( 80, baddie1.health)
  })
  it("baddie can rage", function(){
    var hero1 = new Hero ("Conan", 100, "chicken", 20)
    var baddie1 = new Baddie ("General Sheng", 100, 10, 100)
    baddie1.rageAttack(hero1)
    assert.equal( 60, hero1.health)
    assert.equal( 60, baddie1.rage)
  })
  it("insufficient rage", function(){
    var hero1 = new Hero ("Conan", 100, "chicken", 20)
    var baddie1 = new Baddie ("General Sheng", 100, 10, 20)
    baddie1.rageAttack(hero1)
    assert.equal( 100, hero1.health)
    assert.equal( 20, baddie1.rage)
  })

})