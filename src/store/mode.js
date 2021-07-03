import {makeAutoObservable} from "mobx";

class Mode {
    mode = "Table"
    workman = {
        Surname: "Попов123",
        Name: "Вася123",
        MiddleName: "Николаевич",
        Position: "Начальник СБ",
        DateBirth: "2021-07-04",
        Gender: "Муж",
        EmploymentDate: "2021-07-04",
        DateOfDismissal: "2021-07-04",
        DriverLicense: false,
        Colleagues: [
            {Id: 1, Name: "Попов1 Вася1 Николаевич1", Status: false},
            {Id: 2, Name: "Попов2 Вася2 Николаевич2", Status: false}
        ],
        OtherAttributes: [{
            Name: "asd",
            Type: "text",
            Value: "asd"
        }]
    }

    constructor(){
        makeAutoObservable(this)
    }
    setMode(newMode, newWorkman){
        this.mode = newMode
        this.workman = newWorkman
        console.log("setMode")
    }
    setWorkman(newWorkman){
        this.workman = newWorkman
    }
    changeColleagues(ind){
        this.workman.Colleagues[ind].Status = !this.workman.Colleagues[ind].Status
    }
    addOtherAttribute(){
        this.workman.OtherAttributes.push({
            Name: "",
            Type: "text",
            Value: ""
        })
    }
    setOtherAttribute(ind, newAttribute){
        if(newAttribute.Type != this.workman.OtherAttributes[ind].Type){
            if(newAttribute.Type == "text") newAttribute.Value = ""
            if(newAttribute.Type == "number") newAttribute.Value = 0
            if(newAttribute.Type == "date") newAttribute.Value = "2021-01-01"
            if(newAttribute.Type == "bool") newAttribute.Value = false
        }
        this.workman.OtherAttributes[ind] = newAttribute
    }
    removeOtherAttribute(ind){
        this.workman.OtherAttributes.splice(ind, 1)
    }
}

export default new Mode()

