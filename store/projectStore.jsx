import  {create} from 'zustand'

import casatour from '../public/projects/casatour.webp'
import agoradexed from '../public/projects/agoradex.webp'
import chemistry from '../public/projects/chemistry.png'

import react from '../public/react.svg'
import dotnet from '../public/dotnet.svg'
import postgres from '../public/postgres.svg'

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
        "Casa Tour",
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
        'github.com/saadjlil/casatour',
        [reactjs, msdotnet, postgresql],
        casatour,
    )

    const chemistery = new Project(
        2,
        "Chemistery",
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
        'github.com/saadjlil/chemistery',
        [reactjs, msdotnet, postgresql],
        chemistry,
    )

    const agoradex = new Project(
        3,
        "AgoraDEX",
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat recusandae sint ratione rerum? Deserunt',
        'github.com/saadjlil/agoradex',
        [reactjs, msdotnet, postgresql],
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