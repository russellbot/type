// boolean
let isCool: boolean = true

// number
let age: number = 56

// string
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Object
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: number = Size.Small;

// Any - !!!!!!!! BE CAREFUL
let whatever: any = 'agghhhh noooo!'
whatever = basket

// void
let sing = (): void => {
    console.log('lalala')
}

// never
let error = (): never => {
    throw Error('ooops');
}

// interface - create a new name that is used everywhere
// the ? after magic makes it an optional property of the object
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

fightRobotArmy({count: 1, type:'dragon'})

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

// type - similar to interface but doesn't work with all declarations - tl;dr Prefer interface types over type aliases.
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!')
    return 5
}

// Class
// can make variable inside a class "private" so they cannot be used outside
// variable are public by default
class Animal {
    private sing: string = 'lalalalala'
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAAWR')
lion.greet()

// Union
// type can be either string OR number
let confused: string | number = 5

// Typescript auto assigns types when not specified
// the following will throw an error because x is automatically assigned a type of 'number'
let x = 4
x = 'hello'