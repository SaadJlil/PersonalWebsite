import  {create} from 'zustand'

import casatour from '../public/projects/casatour.webp'
import agoradexed from '../public/projects/agoradex.webp'
import chemistry from '../public/projects/chemistry.png'

import react from '../public/react.svg'
import dotnet from '../public/dotnet.svg'
import postgres from '../public/postgres.svg'
import python from '../public/python.svg'
import pytorch from '../public/pytorch.svg'

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
        3,
        "Pytorch",
        pytorch,
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
        "Authentication microservice",
        'Empower your website with a personalized microservice using .NET and PostgreSQL',
        'https://github.com/SaadJlil/Username-based-authentication-microservice',
        [msdotnet, postgresql],
        chemistry,
    )

    const agoradex = new Project(
        3,
        "Calib Challenge",
        'Created accurate direction-of-travel predictions for dashcam videos using PyTorch and deep learning, achieving high accuracy on both labeled and unlabeled videos with 910-pixel focal length.',
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