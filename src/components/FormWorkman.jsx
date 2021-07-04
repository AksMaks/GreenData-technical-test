import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import mode from '../store/mode';

const FormWorkman = observer((props) => {
    const handleSubmit = (event) => {
        props.action(mode.workman)
        mode.setMode("Table", null)
        event.preventDefault();
    }
    return(
        <div>
            <button onClick={()=> mode.setMode("Table", null)}>Назад</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Фамилия</span>
                    <input type={"text"} required value={mode.workman.Surname} onChange={(e) => mode.setWorkman({...mode.workman, Surname: e.target.value})}/>
                </div>
                <div>
                    <span>Имя</span>
                    <input type={"text"} required value={mode.workman.Name} onChange={(e) => mode.setWorkman({...mode.workman, Name: e.target.value})}/>
                </div>
                <div>
                    <span>Отчество</span>
                    <input type={"text"} value={mode.workman.MiddleName} onChange={(e) => mode.setWorkman({...mode.workman, MiddleName: e.target.value})}/>
                </div>
                <div>
                        <span>Должность</span>
                        <select required value={mode.workman.Position} onChange={(e) => mode.setWorkman({...mode.workman, Position: e.target.value})}>
                            <option value="ГСБ">ГСБ</option>
                            <option value="ХОП">ХОП</option>
                            <option value="Клоун">Клоун</option>
                        </select>
                    </div>
                <div>
                    <span>Дата рождения</span>
                    <input type={"date"} required value={mode.workman.DateBirth} onChange={(e) => mode.setWorkman({...mode.workman, DateBirth: e.target.value})}/>
                </div>
                <div>
                    <span>Дата приема на работу</span>
                    <input 
                        type={"date"} 
                        value={mode.workman.EmploymentDate} 
                        required 
                        onChange={(e) => {
                            let EmploymentDate = new Date(e.target.value)
                            let DateOfDismissal = new Date(mode.workman.DateOfDismissal)
                            if(EmploymentDate.getTime() < DateOfDismissal.getTime()){
                                mode.setWorkman({...mode.workman, EmploymentDate: e.target.value})
                            }else{
                                mode.setWorkman({...mode.workman, EmploymentDate: mode.workman.DateOfDismissal})
                            }
                        }}/>
                </div>
                <div>
                    <span>Дата увольнения</span>
                    <input 
                        type={"date"} 
                        value={mode.workman.DateOfDismissal} 
                        required 
                        onChange={
                            (e) => {
                                let EmploymentDate = new Date(mode.workman.EmploymentDate)
                                let DateOfDismissal = new Date(e.target.value)
                                console.log(EmploymentDate.getTime() < DateOfDismissal.getTime())
                                if(EmploymentDate.getTime() < DateOfDismissal.getTime()){
                                    mode.setWorkman({...mode.workman, DateOfDismissal: e.target.value})
                                }else{
                                    mode.setWorkman({...mode.workman, DateOfDismissal: mode.workman.EmploymentDate})
                                }
                            }}/>
                </div>
                <div>
                    <span>Наличие прав</span>
                    <input type={"checkbox"} checked={!!mode.workman.DriverLicense} onChange={(e) => mode.setWorkman({...mode.workman, DriverLicense: !mode.workman.DriverLicense})}/>
                </div>
                <div>
                    <span>Коллеги</span>
                    {
                        mode.workman.Colleagues.map((el, ind) => {
                            return (
                                <label key={ind}>
                                    <input 
                                        type="checkbox" 
                                        checked={!!el.Status} 
                                        onChange={(e) => mode.changeColleagues(ind)}/>       
                                    <span>{el.Name}</span>
                                </label>
                            )
                            
                        })
                    }
                </div>
                <div>
                    {mode.workman.OtherAttributes.map((el, ind) => {
                        return(
                            <div key={`OA${ind}`}>
                                <div>
                                    Наименование атрибута
                                    <input 
                                        type={"text"}
                                        value={el.Name} 
                                        onChange={(e) => mode.setOtherAttribute(ind, {...el, Name: e.target.value})}/>
                                </div>
                                <div>
                                    Тип атрибута
                                    <select value={el.Type} onChange={(e) => mode.setOtherAttribute(ind, {...el, Type: e.target.value})}>
                                        <option value="text">Text</option>
                                        <option value="number">Number</option>
                                        <option value="date">Date</option>
                                        <option value="bool">Bool</option>
                                    </select>
                                </div>
                                <div>
                                    Значание атрибута
                                    {(el.Type == "text" || el.Type == "number" || el.Type == "date") && <input type={el.Type} value={el.Value} onChange={(e) => mode.setOtherAttribute(ind, {...el, Value: e.target.value})}/>}
                                    {(el.Type == "bool") && <input type={"checkbox"} checked={!!el.Value} onChange={(e) => mode.setOtherAttribute(ind, {...el, Value:!el.Value})}/>}
                                </div>
                                <div onClick={() => mode.removeOtherAttribute(ind)}>
                                    Удалить атрибут
                                </div>
                            </div>
                        )
                    })}
                    <div onClick={() => mode.addOtherAttribute()}>
                        Добавить атрибут
                    </div>
                </div>
                <button type="submit">{props.text}</button>
            </form>
        </div>
    )
})

export default FormWorkman;

/*
<div>
                            <div>
                                Наименование атрибута
                                <input type={"text"} onChange={(e) => console.log(e)}/>
                            </div>
                            <select>
                                <option value="text">Text</option>
                                <option value="number">Number</option>
                                <option value="date">Date</option>
                                <option value="bool">Bool</option>
                            </select>
                        </div>
                        */