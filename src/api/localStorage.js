import interfase from "./interface"

class interfseLocalstorage extends interfase{
    constructor(){
        super()
    }
    getPeople(){
        let temp = JSON.parse(localStorage.getItem('workmans'))
        console.log(temp)
        return (temp)? temp: []
    }
    addWorkman(newWorkman){
        let countId = (localStorage.getItem('countId'))? localStorage.getItem('countId'): 0
        countId++
        let workmans = (JSON.parse(localStorage.getItem('workmans')))? JSON.parse(localStorage.getItem('workmans')): []
        let Colleagues = (JSON.parse(localStorage.getItem('Colleagues')))? JSON.parse(localStorage.getItem('Colleagues')): []

        newWorkman.Colleagues.forEach(el => {
            if(el.Status){
                Colleagues.push({Id1: countId, Id2: el.Id})
            }
        });
        workmans.push({...newWorkman, Id: countId})

        localStorage.setItem('countId', countId)
        localStorage.setItem('workmans', JSON.stringify(workmans))
        localStorage.setItem('Colleagues', JSON.stringify(Colleagues))

        localStorage.countId++

    }
    changeWorman(changeWorkman){
        let workmans = (JSON.parse(localStorage.getItem('workmans')))? JSON.parse(localStorage.getItem('workmans')): []
        let Colleagues = (JSON.parse(localStorage.getItem('Colleagues')))? JSON.parse(localStorage.getItem('Colleagues')): []
        
        Colleagues = Colleagues.filter(el => el.Id1 !== changeWorkman.Id && el.Id2 !== changeWorkman.Id)
      
        changeWorkman.Colleagues.forEach(el => {
            if(el.Status){
                Colleagues.push({Id1: changeWorkman.Id, Id2: el.Id})
            }
        });

        workmans = workmans.map(el => {
            if(el.Id != changeWorkman.Id){
                return el
            }else{
                return changeWorkman
            }
        })
        
        localStorage.setItem('workmans', JSON.stringify(workmans))
        localStorage.setItem('Colleagues', JSON.stringify(Colleagues))
    }
    removeWorkman(IdWorkman){
        let workmans = (JSON.parse(localStorage.getItem('workmans')))? JSON.parse(localStorage.getItem('workmans')): []
        let Colleagues = (JSON.parse(localStorage.getItem('Colleagues')))? JSON.parse(localStorage.getItem('Colleagues')): []

        workmans = workmans.filter(el => el.Id !== IdWorkman)
        Colleagues = Colleagues.filter(el => el.Id1 !== IdWorkman && el.Id2 !== IdWorkman)
        
        localStorage.setItem('workmans', JSON.stringify(workmans))
        localStorage.setItem('Colleagues', JSON.stringify(Colleagues))
    }
    getWorkmanColleagues(IdWorkman){
        let workmans = (JSON.parse(localStorage.getItem('workmans')))? JSON.parse(localStorage.getItem('workmans')): []
        let Colleagues = (JSON.parse(localStorage.getItem('Colleagues')))? JSON.parse(localStorage.getItem('Colleagues')): []

        let temp = workmans.filter(elf => elf.Id != IdWorkman).map(el => {
            return {
                Id: el.Id,
                Name: `${el.Surname} ${el.Name}, ${el.Position}`,
                Status: !!(Colleagues.find(elf => elf.Id1 == el.Id && elf.Id2 == IdWorkman || elf.Id2 == el.Id && elf.Id1 == IdWorkman))
            }
        })
        return temp;
    }
}

export default new interfseLocalstorage()