import {makeAutoObservable} from "mobx";
import api from "../api/localStorage.js";
class People {
    constructor(){
        makeAutoObservable(this)
    }
    getWorkmans(){
        return api.getPeople()
    }
    addWorkman(newWorkman){
        api.addWorkman(newWorkman)
    }
    changeWorkman(changeWorkman){
        api.changeWorman(changeWorkman)
    }
    removeWorkman(IdWorkman){
        api.removeWorkman(IdWorkman)
    }
    getCurrentWorkmanColleagues (IdWorkman){
        return api.getWorkmanColleagues(IdWorkman)
    }
}

export default new People()

