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
    "UX/UI Design",
    'Crafting user-centric experiences that engage and delight your audience',
    interface_img,
    300,
    300
)

const Containerisation = new Service(
    4,
    "Containerization",
    'Streamlining application deployment with scalable and portable container solutions',
    containerisation_img,
    300,
    300
)

const Webserver = new Service(
    2,
    "Web Development",
    'Transforming your vision into a dynamic and responsive online presence',
    webserver_img,
    260,
    260
)

const Database = new Service(
    3,
    "Database Management",
    'Efficiently organize and optimize your data for seamless operations',
    database_img,
    300,
    300
)

const system = new Service(
    5,
    "BackEnd System Design",
    'Architecting robust systems to meet your unique business requirements',
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