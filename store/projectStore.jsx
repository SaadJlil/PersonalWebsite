import  {create} from 'zustand'

//import chemistry from '../public/projects/microservice.png'
import chemistry from '../public/projects/HomeCosinaLogo.png'
import agoradexed from '../public/projects/calib.png'
import casatour from '../public/projects/Cephiro.png'

import react from '../public/react.svg'
import dotnet from '../public/dotnet.svg'
import postgres from '../public/postgres.svg'
import python from '../public/python.svg'
import pytorch from '../public/pytorch.svg'
import docker from '../public/docker.png'

    class Technology {
        constructor(id, name, icon) {
            this.id = id;
            this.name = name;
            this.icon = icon;
        }
    }

    const reactjs = new Technology(
        1,
        "React",
        react,

    )


    const msdotnet = new Technology(
        2,
        ".NET",
        dotnet,

    )

    const postgresql = new Technology(
        3,
        "Postgres",
        postgres,

    )

    const Python = new Technology(
        3,
        "Python",
        python,
    )  

    const Pytorch = new Technology(
        4,
        "Pytorch",
        pytorch,
    )

    const nodejs = new Technology(
        5,
        "NodeJs",
        react,

    )

    const Docker = new Technology(
        6,
        "Docker",
        docker,

    )




    class Project {
        constructor(id, name, description, github, technologies, img){
            this.id = id;
            this.name = name;
            this.description = description;
            this.github = github;
            this.technologies = technologies;
            this.img = img;
        }
    }


    const casaTour = new Project(
        1,
        "Cephiro",
        'Open source monolithic backend online marketplace for short-term homestay',
        'https://github.com/SaadJlil/Cephiro',
        [reactjs, msdotnet, postgresql],
        casatour,
    )

    const chemistery = new Project(
        2,
        "HomeCosina",
        "Open source Recipe/Nutrition platform using a microservice architecture",
        'https://github.com/SaadJlil/HomeCosina',
        [nodejs, Docker, postgresql],
        chemistry,
    )

    const agoradex = new Project(
        3,
        "Calib Challenge",
        'Created accurate direction-of-travel predictions for dashcam videos using PyTorch, achieving high accuracy',
        'https://github.com/SaadJlil/calib_challenge',
        [Python, Pytorch],
        agoradexed,
    )

    const useProjectStore = create((set) => ({
        projects:  [
            casaTour,
            chemistery,
            agoradex,
        ],
    }))


    export default useProjectStore