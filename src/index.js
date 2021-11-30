import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Auth from './components/Auth'; */
// import Register from './components/register/Register';
// import RestorePass from './components/restorePass/RestorePass';
// import RecoverAccount from './components/recoverAccount/RecoverAccount';
// import Homepage from './components/homepage/HomepageAdmin'
// import SupportCasher from './components/supportCasher/SupportCasher';
import SupportProduct from './components/supportProduct/SupportProduct';

/*
Instalar el cors
Hacer fetch
funcion ternaria: como un if para una sola linea de codigo
r

*/

//import SupportCustomer from './components/supportCustomer/SupportCustomer';
import 'bootstrap/dist/css/bootstrap.min.css';

// {/* datods para la pantalla de auth 
// const textos = [
//   { title: "Accede a tu cuenta", buttonUno: "Registrarse", buttonDos: "Iniciar Sesión", place1: "Nombre de usuario", place2: "Contraseña" }
// ]; */}

// {/* datos para la pantalla de Register
// onst textos = [
//   { title: "Registrate con nosotros", buttonUno: "Iniciar Sesión", buttonDos: "Registrarse", 
//   place1:"Nombre de usuario", place2: "Correo electronico", place3: "Contraseña"}
// ]; */}
ReactDOM.render(
  <React.StrictMode>
    {/* <Auth texts={textos}/> */}
    {/* <Register texts={textos} /> */}
    {/* <RestorePass /> */}
    {/* <RecoverAccount /> */}
    {/* <Homepage />  */}
    {/* <SupportCasher /> */}
    <SupportProduct />
    {/* <SupportCustomer /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

