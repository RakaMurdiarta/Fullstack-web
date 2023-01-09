import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Mystyle from "./normal.module.css"
import Mystyle2 from "./article.module.css"
import Header from './Header';

function App(){
  return(
  <div className='App'>
    <MyButton/>
    <Header/>
    <button className={Mystyle.normal}>My Button</button>
    <button className={Mystyle2.normal}>My Button</button>
    </div>
  );
}
export default App;
