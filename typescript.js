// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - !!!!!!!! BE CAREFUL
var whatever = 'agghhhh noooo!';
whatever = basket;
// void
var sing = function () {
    console.log('lalala');
};
// never
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Class
// can make variable inside a class "private" so they cannot be used outside
// variable are public by default
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAWR');
lion.greet();
// Union
// type can be either string OR number
var confused = 5;
// Typescript auto assigns types when not specified
// the following will throw an error because x is automatically assigned a type of 'number'
var x = 4;
x = 'hello';
