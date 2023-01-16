import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/PropsInFunctional';
import Propsinclass from "./components/PropsInClass";
import State from './components/newState';
import Tampil from './latihan hide and show';

const root = ReactDOM.createRoot(document.getElementById('root'));

//props in Functional
// root.render(
//   <React.StrictMode>
//     <App />
//     <Profile name='Raka' lastname='Mudiarta' />
//     <Profile name='Mita' lastname=''/>
//   </React.StrictMode>
// );
// root.render(
//   <Propsinclass message='Ini Props dari Class'/>
// )
root.render(
  <Tampil />
)
