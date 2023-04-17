import  {create} from 'zustand'

import casatour from '../public/projects/casatour.webp'
import agoradexed from '../public/projects/agoradex.webp'
import chemistry from '../public/projects/chemistry.png'

import react from '../public/react.svg'
import dotnet from '../public/dotnet.svg'
import postgres from '../public/postgres.svg'


class Service {
    constructor(id, name, description, github, technologies, img){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

const casaTour = new Service(
    1,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)

const casakhra = new Service(
    4,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)

const chemistery = new Service(
    2,
    "Chemistery",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)

const agoradex = new Service(
    3,
    "AgoraDEX",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
)

const useServiceStore = create((set) => ({
    services:  [
        casaTour,
        chemistery,
        agoradex,
        casakhra
    ],
}))


export default useServiceStore 