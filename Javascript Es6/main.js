class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
const square= new Rectangle(12,12)
// console.log(square)

const person = ["John", "Doe", 46];
console.log(person);

const ages = [3, 10, 18, 20];
// console.log(ages[-1]);
const cars = ["BMW", "Volvo", "Mini"];
for (let i of cars){
    console.log(i)
}

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

// console.log(newArr);

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
// const j=persons.length=2;
console.log(persons.at(-1))

const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container.likes = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes[persons.length]);




const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);


const ages1 = [32, 33, 16, 40];
const result = ages1.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result)

let text = "ABCDEFG"
const myArr = Array.from(text);
console.log(myArr)

const letters = new Set(["a","b","c"]);
console.log(letters);