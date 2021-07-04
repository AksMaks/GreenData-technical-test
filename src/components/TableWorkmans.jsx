import React, {useReducer} from 'react';
import {observer} from 'mobx-react-lite';
import people from '../store/people';
import mode from '../store/mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container  } from 'react-bootstrap';

const defWorkman = { 
    Surname: "",
    Name: "",
    MiddleName: "",
    Position: "ГСБ",
    DateBirth: "2020-01-01",
    Gender: "Муж",
    EmploymentDate: "2020-01-01",
    DateOfDismissal: "2020-01-01",
    DriverLicense: false,
    Colleagues: [],
    OtherAttributes: []
}

const TableWorkmans = observer( (props) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return (
    <Container className="justify-content-sm-center mt-2">
        <Button className="mb-1"
            onClick={()=> mode.setMode("Add", {...defWorkman, Colleagues: people.getCurrentWorkmanColleagues(null)})}
            >Добавить
        </Button>
        <Table striped bordered hover size="sm" responsive="sm" style={{minWidth: "700px", overflowX: "hidden"}}>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Должность</th>
                </tr>
            </thead>
            <tbody>
                {
                    people.getWorkmans().map(el => 
                        <tr key={el.Id}>
                            <td>{el.Surname}</td>
                            <td>{el.Name}</td>
                            <td>{el.MiddleName}</td>
                            <td>{el.Position}</td>
                            <td style={{width: "225px" }}>
                                <button style={{width: "50px"}} className={"btn btn-secondary ml-1"} onClick={()=> mode.setMode("Details", {...el, Colleagues: people.getCurrentWorkmanColleagues(el.Id)})}>...</button>
                                <button style={{width: "50px"}} className={"btn btn-secondary ml-1"} onClick={()=> mode.setMode("Change", {...el, Colleagues: people.getCurrentWorkmanColleagues(el.Id)})}>Ред.</button>
                                <button style={{width: "100px"}} className={"btn btn-secondary ml-1"} onClick={() => {people.removeWorkman(el.Id); forceUpdate()}}>Удалить</button> 
                            </td>               
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </Container>
  );
})

export default TableWorkmans;
