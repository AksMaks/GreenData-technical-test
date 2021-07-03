import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TableWorkmans from './components/TableWorkmans.jsx'
import FormWorkman from './components/FormWorkman.jsx'
import DetailsWorkman from './components/DetailsWorkman.jsx'

import mode from './store/mode';
import people from './store/people';
import {observer} from 'mobx-react-lite';

const defWorkman = { 
  Surname: "",
  Name: "",
  MiddleName: "",
  Position: "ГСБ",
  DateBirth: "2000-01-01",
  Gender: "Муж",
  EmploymentDate: "2000-01-01",
  DateOfDismissal: "2000-01-01",
  DriverLicense: false,
  Colleagues: []
}

const App = observer(() => {
  return (
    <div className="App">
      {mode.mode == "Table" && <TableWorkmans/>}
      {mode.mode == "Details" && <DetailsWorkman el={mode.workman}/>}
      {mode.mode == "Add" && <FormWorkman text={"Добавить"} action={(el) => people.addWorkman(el)}/>}
      {mode.mode == "Change" && <FormWorkman text={"Изменить"} action={(el) => people.changeWorkman(el)}/>}
    </div>
  );
})

export default App;
