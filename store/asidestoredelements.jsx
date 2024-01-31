import  {create} from 'zustand'


class AsideStoredElement{
    constructor(id, name, date, description){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date; 
    }
}
const MarocTbs = new AsideStoredElement(
    1,
    "Post graduate degree in Data Analytics",
    "2024",
    'Douglas College (Vancouver, BC, Canada)',
)
const Toulouse = new AsideStoredElement(
    1,
    "Post graduate degree in Business Analytics",
    "2023",
    'Niagara College (NOTL, Ontario, Canada)'
)
const Canada = new AsideStoredElement(
    1,
    "DEC - Diplôme d'études collégiales techniques",
    "2019-2021",
    "Université Internationale de Casablanca"
)



const useStoreAsideElements = create((set) => ({
    elements:  [
        MarocTbs,
        Toulouse,
        Canada
    ],
}))


export default useStoreAsideElements 