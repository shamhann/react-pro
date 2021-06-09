import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
ReactDOM.render(
  <BrowserRouter>
      <div className='basis'>
          <App/>
      </div>

  </BrowserRouter>,
  document.getElementById('root')
);


