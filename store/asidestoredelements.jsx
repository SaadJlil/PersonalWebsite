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
    "Bachelor in management (General)",
    "2019 - 2020",
    'Toulouse Business School (Casablanca, Morocco)',
)
const Toulouse = new AsideStoredElement(
    1,
    "Bachelor in mamagement (3 semester exchange) specialisation in data analysis",
    "2020-2022",
    'Toulouse Business School (Toulouse , France/Barcelona, Spain)'
)
const Canada = new AsideStoredElement(
    1,
    "graduate degree in business analytics",
    "Enrolled",
    'Niagara College (Niagara On-The-Lake,Canada)'
)



const useStoreAsideElements = create((set) => ({
    elements:  [
        MarocTbs,
        Toulouse,
        Canada
    ],
}))


export default useStoreAsideElements 