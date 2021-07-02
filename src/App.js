import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TableWorkmans from './components/TableWorkmans.jsx'
import FormWorkman from './components/FormWorkman.jsx'
import DetailsWorkman from './components/DetailsWorkman.jsx'

function App() {
  
  return (
    <div className="App">
      <TableWorkmans/>
    </div>
  );
}

export default App;
