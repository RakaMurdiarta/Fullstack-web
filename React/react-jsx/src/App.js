// import logo from './logo.svg';
import './App.css';
import List from './list';

function Car() {

  return <h2>Halo ini mobil saya</h2>;
}
function Car2(props) {
  return <h2>Halo ini mobil saya warna {props.color}</h2>;
}

function App() {
  const welcome = {
    greeting: 'Haloo',
    title: "Koding Akademi"
  }

  const myElement = `React is ${5 + 5} better with JSX`
  const x = 10;
  let text = 'Koding Akademi'
  if (x < 20) {
    text = 'Hello'
  }
  return (
    <div className='App'>
      <div>{welcome.greeting} from {text}</div>
      <div><h2>{myElement}</h2></div>
      <label htmlFor="search"> Search : </label>
      <input type="text" name="" id="search" />
      <Car />
      <Car2 color='Blue'></Car2>
      <Car2 color='Yellow'></Car2>
      <List/>

    </div>

  )
}

export default App;
