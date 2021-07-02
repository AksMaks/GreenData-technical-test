import {makeAutoObservable} from "mobx";

class People {
    countId = 1
    workmans =  [
        { 
            Id: 1,
            Surname: "Попов1",
            Name: "Вася",
            MiddleName: "Николаевич",
            Position: "Начальник СБ",
            DateBirth: "01.01.2000",
            Gender: "Муж",
            EmploymentDate: "",
            DateOfDismissal: "",
            DriverLicense: false,
            Colleagues: []
        }
    ];
    constructor(){
        makeAutoObservable(this)
    }
    addWorkman(newWorkman){
        this.countId++
        this.workmans.push({newWorkman, Id: this.countId})
    }
    removeWorkman(IdWorkman){
        this.workmans = this.workmans.filter(el => el.Id !== IdWorkman)
    }

}

export default new People()

