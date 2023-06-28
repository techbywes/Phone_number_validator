import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GetCats from './componenets/GetCats';
import PredictAge from './componenets/PredictAge';
import Iban from './componenets/Iban';
import ValidatePhoneNo from './componenets/ValidatePhoneNo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ValidatePhoneNo/>
    {/* <Iban/> */}
    {/* <App /> */}
    {/* <PredictAge/> */}
    {/* <GetCats/> */}
  </React.StrictMode>
);

