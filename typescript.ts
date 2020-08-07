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
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

// type - similar to interface but doesn't work with all declarations
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}