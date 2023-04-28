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
    "Casa Tour",
    "1980945509",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)
const Toulouse = new AsideStoredElement(
    1,
    "Casa Tour",
    "1980945509",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)
const Barcelona = new AsideStoredElement(
    1,
    "Casa Tour",
    "1980945509",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)
const Canada = new AsideStoredElement(
    1,
    "Casa Tour",
    "1980945509",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)



const useStoreAsideElements = create((set) => ({
    elements:  [
        MarocTbs,
        Toulouse,
        Barcelona,
        Canada
    ],
}))


export default useStoreAsideElements 