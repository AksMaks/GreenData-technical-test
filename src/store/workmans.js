import {makeAutoObservable} from "mobx";

class People {
    people = [
        { 
            Surname: "Попов",
            Name: "Вася",
            middleName: "Николаевич",
            Position: "Начальник СБ",
            DateBirth: "01.01.2000",
            Gender: "Муж",
            employmentDate: "",
            dateOfDismissal: "",
            driverLicense: [],
            сolleagues: []
        },
        { 
            Surname: "Попов",
            Name: "Вася",
            middleName: "Николаевич",
            Position: "Начальник СБ",
            DateBirth: "01.01.2000",
            Gender: "Муж",
            employmentDate: "",
            dateOfDismissal: "",
            driverLicense: [],
            сolleagues: []
        },
        { 
            Surname: "Попов",
            Name: "Вася",
            middleName: "Николаевич",
            Position: "Начальник СБ",
            DateBirth: "01.01.2000",
            Gender: "Муж",
            employmentDate: "",
            dateOfDismissal: "",
            driverLicense: [],
            сolleagues: []
        }
    ]
    constructor(){
        makeAutoObservable()
    }
}

export default new People()

