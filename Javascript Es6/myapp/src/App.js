import './App.css';

function App() {
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
  const Hitung = () => {
    let jum = 0

    for (let i of myvalue) {
      jum += i
    }
    return jum
  }
  console.log(`Total Penjumlahan dari [${myvalue}] = ${Hitung()}`)

  //Soal no.5
  let myarr = [2, 3, 4, 5, 6, 9]
  const last = (arr) => {
    return arr[arr.length - 1]
  }
  console.log(`Ini Nilai Terakhir dari Array [${myarr}] : ${last(myarr)}`)


  //Soal no.6
  //Soal no.6

  const Company_desc = [
    { name: "Company 1", category: 'Finance', start: 1981, end: 2004 },
    { name: "Company 2", category: 'Retail', start: 1992, end: 2008 },
    { name: "Company 3", category: 'Auto', start: 1999, end: 2007 },
    { name: "Company 4", category: 'Retail', start: 1989, end: 2010 },
    { name: "Company 5", category: 'Technology', start: 2009, end: 2014 }
  ]




  // console.log(retail_c);

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

  return (


    <div > Halooooo, {`Ini adalah nilai terakhir dari Array [${myarr}] yaitu ${last(myarr)}`
    }</div >
  );
}

export default App;
