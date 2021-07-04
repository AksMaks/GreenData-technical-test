import React from 'react';
import {observer} from 'mobx-react-lite';
import mode from '../store/mode';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table} from 'react-bootstrap';

const DetailsWorkman = observer( (props) => {
  return (
    <div  style={{minWidth: "350px"}} className={"container w-50 mt-2"}>
        <Button style={{width: "100px"}} className={"mb-2"} onClick={()=> mode.setMode("Table", null)}>Назад</Button>
        <Table size="sm"  style={{minWidth: "700px", overflowX: "hidden"}}>
            <tbody>
                <tr>
                    <td>Фамилия</td>
                    <td>{props.el.Surname}</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>{props.el.Name}</td>
                </tr>
                <tr>
                    <td>Отчество</td>
                    <td>{props.el.MiddleName}</td>
                </tr>
                <tr>
                    <td>Должность</td>
                    <td >{props.el.Position}</td>
                </tr>
                <tr>
                    <td>Дата рождения</td>
                    <td>{props.el.DateBirth}</td>
                </tr>
                <tr>
                    <td>Пол</td>
                    <td>{props.el.Gender}</td>
                </tr>
                <tr>
                    <td>Дата приема на работу</td>
                    <td>{props.el.EmploymentDate}</td>
                </tr>
                <tr>
                    <td>Дата увольнения</td>
                    <td>{props.el.DateOfDismissal}</td>
                </tr>
                <tr>
                    <td>Наличие прав</td>
                    <td>{props.el.DriverLicense? "Есть": "Нет"}</td>
                </tr>
                <tr>
                    <td>Коллеги</td>
                    <td>
                        {
                            props.el.Colleagues.filter(elf => elf.Status).map((el, ind) => {
                                return (
                                    <div key={ind}>{el.Name}</div>
                                )
                            })
                        }
                    </td>
                </tr>
                {!!props.el.OtherAttributes.length && props.el.OtherAttributes.map((el, ind) => {
                    return (
                        <tr key={ind}>
                            <td>{el.Name}</td>
                            <td>{el.Value}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <style>{"\
        td{\
            width: 300px;\
        }\
      "}</style>
    </div>
  );
})

export default DetailsWorkman;
