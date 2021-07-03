import React from 'react';
import {observer} from 'mobx-react-lite';
import people from '../store/people';
import mode from '../store/mode';

const defWorkman = { 
    Surname: "",
    Name: "",
    MiddleName: "",
    Position: "ГСБ",
    DateBirth: "2021-07-04",
    Gender: "Муж",
    EmploymentDate: "2021-07-04",
    DateOfDismissal: "2021-07-04",
    DriverLicense: false,
    Colleagues: [],
    OtherAttributes: []
}

const TableWorkmans = observer( (props) => {
  return (
    <div>
        <button 
            onClick={()=> mode.setMode("Add", {...defWorkman, Colleagues: people.getCurrentWorkmanColleagues(null)})}
            >Добавить
        </button>
        <table>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Должность</th>
                </tr>
            </thead>
            <tbody>
                {console.log(people.workmans)}
                {
                    people.workmans.map(el => 
                        <tr key={el.Id}>
                            <td>{el.Surname}</td>
                            <td>{el.Name}</td>
                            <td>{el.Position}</td>
                            <td>
                                <button onClick={()=> mode.setMode("Details", {...el, Colleagues: people.getCurrentWorkmanColleagues(el.Id)})}>Подробнее</button>
                                <button onClick={()=> mode.setMode("Change", {...el, Colleagues: people.getCurrentWorkmanColleagues(el.Id)})}>Ред.</button>
                                <button onClick={() => people.removeWorkman(el.Id)}>Удалить</button> 
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  );
})

export default TableWorkmans;
