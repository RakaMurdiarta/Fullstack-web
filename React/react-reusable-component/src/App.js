// import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card'
import profile from './image/profile.jpeg'
// import 'bootstrap/dist/css/bootstrap.min.css'


// import InputWithLable from './components/InputWithLable/InputWithLabel';
// import Header from './components/Header/Header';

// function Handlechange(event) {
//   console.log(event.target.value)
// }
function App() {
  return (
    <>
      <Card  href="#" gambar={profile} width='150px' title="Raka Murdiarta" comment="Saya Belajar React di Koding Akademi" nickname="Raka" />
    </>

    // <div className="App">
    //   <InputWithLable id='search1' label='Cari : ' />
    //   <br />
    //   <InputWithLable id='search2' label="Submit : " onInputChange={Handlechange} />
    // </div>
  );
}
export default App;

