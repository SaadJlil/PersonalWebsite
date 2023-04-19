import  {create} from 'zustand'

import interface_img from '../public/userexp.png'
import webserver_img from '../public/website.png'
import containerisation_img from '../public/docker.png'
import database_img from '../public/database.webp'
import system_img from '../public/system.png'



class Service {
    constructor(id, name, description, img, height, width){
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img; 
        this.height = height;
        this.width = width;
    }
}

const interfaces = new Service(
    1,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    interface_img,
    300,
    300
)

const Containerisation = new Service(
    4,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    containerisation_img,
    300,
    300
)

const Webserver = new Service(
    2,
    "Chemistery",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    webserver_img,
    260,
    260
)

const Database = new Service(
    3,
    "AgoraDEX",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    database_img,
    300,
    300
)

const system = new Service(
    5,
    "AgoraDEX",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    system_img,
    260,
    260
)

const useServiceStore = create((set) => ({
    services:  [
        Database,
        interfaces,
        system,
        Webserver,
        Containerisation
    ],
}))


export default useServiceStore 