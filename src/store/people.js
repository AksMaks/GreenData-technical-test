import {makeAutoObservable} from "mobx";
import api from "../api/localStorage.js";
class People {
    countId = 2
    workmans =  [
    ];
    Colleagues = [
    ]
    constructor(){
        makeAutoObservable(this)
    }
    getWorkmans(){
        //return this.workmans
        return api.getPeople()
        
    }
    addWorkman(newWorkman){
        api.addWorkman(newWorkman)
        /*
        this.countId++
        
        newWorkman.Colleagues.forEach(el => {
            if(el.Status){
                this.Colleagues.push({Id1: this.countId, Id2: el.Id})
            }
        });
        this.workmans.push({...newWorkman, Id: this.countId})
        console.log(this.workmans)
        */
    }
    changeWorkman(changeWorkman){
        api.changeWorman(changeWorkman)
        /*
        this.Colleagues = this.Colleagues.filter(el => el.Id1 !== changeWorkman.Id && el.Id2 !== changeWorkman.Id)
      
        changeWorkman.Colleagues.forEach(el => {
            if(el.Status){
                this.Colleagues.push({Id1: changeWorkman.Id, Id2: el.Id})
            }
        });

        this.workmans = this.workmans.map(el => {
            if(el.Id != changeWorkman.Id){
                return el
            }else{
                return changeWorkman
            }
        })
        */
    }
    removeWorkman(IdWorkman){
        api.removeWorkman(IdWorkman)
        /*
        this.workmans = this.workmans.filter(el => el.Id !== IdWorkman)
        this.Colleagues = this.Colleagues.filter(el => el.Id1 !== IdWorkman && el.Id2 !== IdWorkman)
        */
    }
    getCurrentWorkmanColleagues (IdWorkman){
        return api.getWorkmanColleagues(IdWorkman)
        /*
        let temp = this.workmans.filter(elf => elf.Id != IdWorkman).map(el => {
            return {
                Id: el.Id,
                Name: `${el.Surname} ${el.Name}, ${el.Position}`,
                Status: !!(this.Colleagues.find(elf => elf.Id1 == el.Id && elf.Id2 == IdWorkman || elf.Id2 == el.Id && elf.Id1 == IdWorkman))
            }
        })
        console.log(this.Colleagues.map(el => el))
        console.log(temp)
        return temp;
        */
    }
}

export default new People()

