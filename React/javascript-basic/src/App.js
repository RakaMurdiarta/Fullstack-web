
import './App.css';

function App() {

  // soal no 1
  const cityName = "Denpasar";
  let num1 = 200;
  let num2 = 800;
  let hasil = num1 + num2;

  //soal number 2
  console.log(cityName)
  console.log(num1 + "+" + num2 + "=" + hasil)

  //soal number 3

  function clone(value) {
    let myvar = ""
    for (let step = 0; step < 3; step++) {
      myvar += value + " ";
      // console.log(myvar);
    }

    return myvar
  }
  console.log(clone(150));

  //Soal Number 4

  function click() {
    const carItem = {
      itemID: 1,
      itemName: 'Shoes Nike',
      itemPrice: "$56",
      itemQuantity: 2,
      cartID: 201
    }
    let list = ['itemName', 'itemQuantity']
    let ger = ""
    for (let n in list) {
      console.log(list[n] + ` : ` + carItem[list[n]] + " \n")
      ger += list[n] + ` : ` + carItem[list[n]] + " \n"
      document.querySelector("h2#click").innerText = ger
    }
    return ger
  }

  //Soal number 5

  var line = "This is Bootcamp"
  var line1 = "Fullstack Web Developer"
  var line2 = 'By "Koding Akademi"'

  //Soal number 6

  let fruits = ["Jambu", "Mangga", "Durian", "Anggur"]

  for (let i in fruits) {
    var ma = fruits[i]
    console.log(ma);
  }

  fruits[2] = "Durian"
  fruits.push("Rambutan")
  // console.log(fruits)


  //soal number 7

  function compare(val1, val2) {

    let total1 = val1 + val2;
    if (total1 <= 100) {
      console.log(true)
    } else {
      console.log(false)
    }
    return total1
  }
  const total = compare(200, 500)
  console.log(total)


  //Soal number 8

  const student = {

    name: "Wayan Sukseme",
    age: 30,
    hobbies: ["baca", "ngoding", "tidur"]
  }
  for (let k in student) {
    console.log(k, " : ", student[k])
  }

  return (
    <div className="App">
      <h1>Saya Berasal dari {cityName}</h1>
      <h1>Pertambahan dari : {num1} + {num2} = {hasil}</h1>
      <h1>Clone : {clone("Raka ")}</h1>
      <button onClick={click}>Show Name and Quantity</button>
      <h2 id="click"></h2>
      <h1>{line}</h1>
      <h1>{line1}</h1>
      <h1>{line2}</h1>
    </div>
  );
}

export default App;
