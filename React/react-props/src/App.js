// import logo from './logo.svg';
import './App.css';
import YellowBr from './components/Yellow-Border/Yellow-border';
// import InputWithLable from './components/InputWithLable/InputWithLabel';
// import Garage from './latihanProps';
// import {Stories,Garage} from './latihanProps';
// import Header from './components/Header/Header';

// function Handlechange(event) {
//   console.log(event.target.value)
// }
import Header from './components/Header/Header';
import UserPofile from './components/Header/UserProfile';

function App() {
  return (
    <div className="App">

      <YellowBr color="skyblue">
        <Header/>
        <UserPofile/>
      </YellowBr>
      {/* <Garage/> */}
      {/* <Stories/> */}
      {/* <MyForm />
      <InputWithLable id='search1' label='Cari : ' />
      <br />
      <InputWithLable id='search2' label="Submit : " onInputChange={Handlechange} /> */}

      {/* <YellowBr color='green'/> */}
    </div>
  );
}

export default App;
