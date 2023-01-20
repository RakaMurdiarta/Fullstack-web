// import logo from './logo.svg';
import './App.css';
import YellowBr from './components/Yellow-Border/Yellow-border';
import MyForm from './components/Form/MyForm';
import InputWithLable from './components/InputWithLable/InputWithLabel';
// import Header from './components/Header/Header';

function Handlechange(event) {
  console.log(event.target.value)
}

function App() {
  return (
    <div className="App">
      <MyForm />
      <InputWithLable id='search1' label='Cari : ' />
      <br />
      <InputWithLable id='search2' label="Submit : " onInputChange={Handlechange} />

      {/* <YellowBr color='green'/> */}
    </div>
  );
}

export default App;
