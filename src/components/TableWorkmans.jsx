import React from 'react';
import people from '../store/people';
import {observer} from 'mobx-react-lite';

const TableWorkmans = observer( () => {
  return (
    <div>
        <button>Добавить</button>
        <table>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                </tr>
            </thead>
            <tbody>
                {
                    people.workmans.map(el => 
                        <tr key={el.Id}>
                            <td>{el.Surname}</td>
                            <td>{el.Name}</td>
                            <td>
                                <button>Подробнее</button>
                                <button>Ред.</button>
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
