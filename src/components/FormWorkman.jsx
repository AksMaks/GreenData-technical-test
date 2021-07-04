import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import mode from '../store/mode';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table} from 'react-bootstrap';

const FormWorkman = observer((props) => {
    const handleSubmit = (event) => {
        props.action(mode.workman)
        mode.setMode("Table", null)
        event.preventDefault();
    }
    return(
        <div style={{minWidth: "350px"}} className={"container w-50 mt-2"}>
            <Button style={{width: "100px"}} className={"mb-2"} onClick={()=> mode.setMode("Table", null)}>Назад</Button>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Фамилия" required value={mode.workman.Surname} onChange={(e) => mode.setWorkman({...mode.workman, Surname: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Имя" required value={mode.workman.Name} onChange={(e) => mode.setWorkman({...mode.workman, Name: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control type="text" placeholder="Отчество" required value={mode.workman.MiddleName} onChange={(e) => mode.setWorkman({...mode.workman, MiddleName: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Должность</Form.Label>
                    <Form.Control as="select" required value={mode.workman.Position} onChange={(e) => mode.setWorkman({...mode.workman, Position: e.target.value})}>
                        <option value="ГСБ">ГСБ</option>
                        <option value="ХОП">ХОП</option>
                        <option value="Клоун">Клоун</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control type={"date"} required value={mode.workman.DateBirth} onChange={(e) => mode.setWorkman({...mode.workman, DateBirth: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Дата приема на работу</Form.Label>
                    <Form.Control 
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
                </Form.Group>
                <Form.Group>
                    <Form.Label>Дата увольнения</Form.Label>
                    <Form.Control 
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
                </Form.Group>
                <Form.Group controlId="DriverLicense">
                    <Form.Check type="checkbox" label="Наличие прав" checked={!!mode.workman.DriverLicense} onChange={(e) => mode.setWorkman({...mode.workman, DriverLicense: !mode.workman.DriverLicense})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Коллеги</Form.Label>
                    <Form.Control as="select" multiple onChange={e => mode.changeColleagues([...e.target.options].filter(option => option.selected).map(x => x.value))}>
                        {mode.workman.Colleagues.map((el, ind) => {
                            return (
                                <option key={ind} value={ind}>{el.Name}</option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                <div>
                    <div>
                        <Form.Label>Дополнительные атрибуты</Form.Label>
                    </div>
                    {!!mode.workman.OtherAttributes.length &&
                    <Table className={"table"} style={{overflowX: "auto"}}>
                        <thead>
                            <tr>
                                <th>
                                    Имя
                                </th>
                                <th>
                                    Тип
                                </th>
                                <th>
                                    Значание
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {mode.workman.OtherAttributes.map((el, ind) => {
                            return(
                                <tr key={`OA${ind}`} >
                                    <td>
                                        <Form.Control 
                                            type={"text"}
                                            value={el.Name}
                                            style={{width: "100%", minWidth: "100px"}}
                                            onChange={(e) => mode.setOtherAttribute(ind, {...el, Name: e.target.value})}/>
                                    </td>
                                    <td>
                                        <Form.Control style={{width: "100%", minWidth: "100px"}} as="select" value={el.Type} onChange={(e) => mode.setOtherAttribute(ind, {...el, Type: e.target.value})}>
                                            <option value="text">Text</option>
                                            <option value="number">Num</option>
                                            <option value="date">Date</option>
                                        </Form.Control>
                                    </td>
                                    <td>
                                        <Form.Control style={{width: "100%", minWidth: "100px"}} type={el.Type} value={el.Value} onChange={(e) => mode.setOtherAttribute(ind, {...el, Value: e.target.value})}/>
                                    </td>
                                    <td >
                                        <Button className="float-right" style={{width: "100px"}} onClick={() => mode.removeOtherAttribute(ind)}>Удалить</Button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                    }
                    <Button onClick={() => mode.addOtherAttribute()}>Добавить атрибут</Button>
                </div>
                <div>
                    <Button className="float-right mr-3 mt-2 mb-3" size="lg" type="submit" variant="primary">{props.text}</Button>
                </div>
            </Form>
        </div>
    )
})

export default FormWorkman;