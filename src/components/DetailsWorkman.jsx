import React from 'react';
import people from '../store/people';
import {observer} from 'mobx-react-lite';
import mode from '../store/mode';

const DetailsWorkman = observer( (props) => {
  return (
    <div>
        <button onClick={()=> mode.setMode("Table", null)}>Назад</button>
        <div>
            <span>Фамилия</span>
            <span>{props.el.Surname}</span>
        </div>
        <div>
            <span>Имя</span>
            <span>{props.el.Name}</span>
        </div>
        <div>
            <span>Отчество</span>
            <span>{props.el.MiddleName}</span>
        </div>
        <div>
            <span>Должность</span>
            <span>{props.el.Position}</span>
        </div>
        <div>
            <span>Дата рождения</span>
            <span>{props.el.DateBirth}</span>
        </div>
        <div>
            <span>Пол</span>
            <span>{props.el.Gender}</span>
        </div>
        <div>
            <span>Дата приема на работу</span>
            <span>{props.el.EmploymentDate}</span>
        </div>
        <div>
            <span>Дата увольнения</span>
            <span>{props.el.DateOfDismissal}</span>
        </div>
        <div>
            <span>Наличие прав</span>
            <span>{props.el.EmploymentDate? "Права есть": "Прав нет"}</span>
        </div>
        <div>
            <span>Коллеги</span>
            <span>
                {
                    props.el.Colleagues.map(el => {
                        <span>{el}</span>
                    })}
            </span>
        </div>
    </div>
  );
})

export default DetailsWorkman;
