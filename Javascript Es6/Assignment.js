// Assigntment

//Soal No.1
const panjangString = str => str.length
console.log(`Panjang String ini : ${panjangString('Hai')}`)


const jumlah = (angka1, angka2) => angka1 + angka2;

console.log(jumlah(5, 5));

const hitung = (a, b) => {
  let c = 5
  return (a, b) * c;
}
console.log(hitung(20, 20));
const panjang = panjangString('hai')


//Soal no 2

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y

  }

  plus(num1, num2) {
    let hasil1 = num1 + this.x
    let hasil2 = num2 + this.y
    return `(${hasil1} , ${hasil2})`

  }

}
let tot = new Point(12, 4)
console.log(tot.plus(12, 12))


//Soal no 3
const inventory = [
  { type: "Machine", value: 5000 },
  { type: "Machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "Machine", value: 77 }
]

const myvalue = inventory.map((item) => item.value)
console.log(myvalue);
const Hitung = () => {
  let jum = 0

  for (let i of myvalue) {
    jum += i
  }
  return jum
}
console.log(`Total Penjumlahan dari [${myvalue}] = ${Hitung()}`)

//No 4 SKiP

//No. 5

let myarr = [2, 3, 4, 5, 6, 9]
const last = (arr) => {
  return arr[arr.length - 1]
}
console.log(last(myarr))

//Soal no.6

const Company_desc = [
  { name: "Company 1", category: 'Finance', start: 1981, end: 2004 },
  { name: "Company 2", category: 'Retail', start: 1992, end: 2008 },
  { name: "Company 3", category: 'Auto', start: 1999, end: 2007 },
  { name: "Company 4", category: 'Retail', start: 1989, end: 2010 },
  { name: "Company 5", category: 'Technology', start: 2009, end: 2014 }
]


let retail_c = []
Company_desc.forEach((item) => {
  // console.log(item.name); //Get name
  // item.start>1987?console.log(item.name):null;//get name by start after 1987
  item.category == 'Retail' ? retail_c += `<div>${item.name}</div>\n` : null;
  return retail_c
})

console.log(retail_c);

const hoho = Company_desc.sort((a, b) => Number(b.end) - Number(a.end)).map((item) => item.name)
console.log("sorted", hoho);

const Person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
const { name: nama, address: { street: jalan } } = Person
console.log(jalan);

//soal 7
const users = [
  { id: 1, name: "Doni", city: 'Denpasar', age: 35 },
  { id: 2, name: "Tono", city: 'Gianyar', age: 46 },
  { id: 3, name: "Bento", city: 'Surabaya', age: 22 },
  { id: 4, name: "Komang", city: 'Jakarta', age: 16 }
];

const user = users.find((item) => item.id == 2)
console.log(user);

const myCity = users.map((item) => item.city)
console.log(myCity);

const adults = users.filter((item) => item.age > 18)
console.log(adults);

