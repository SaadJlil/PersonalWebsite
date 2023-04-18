import  {create} from 'zustand'

import interface_img from '../public/smartphone-heart-svgrepo-com.svg'
import webserver_img from '../public/website-program-svgrepo-com.svg'
import containerisation_img from '../public/docker-svgrepo-com.svg'
import database_img from '../public/database-g6a37ecf0b_1280.png'


class Service {
    constructor(id, name, description, img){
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img; 
    }
}
/*
const interfaces = new Service(
    1,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    '/home/whoami/Desktop/FrontEnd/PersonalWebsite/public/smartphone-heart-svgrepo-com.svg'
)

const Containerisation = new Service(
    4,
    "Casa Tour",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    '../public/smartphone-heart-svgrepo-com.svg'
)

const Webserver = new Service(
    2,
    "Chemistery",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    '../public/dotnet.svg'
)
*/
const Database = new Service(
    3,
    "AgoraDEX",
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
    database_img
)

const useServiceStore = create((set) => ({
    services:  [
        Database
    ],
}))


export default useServiceStore 