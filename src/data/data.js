import portfolioImage from '../images/info.png'
import klatterdomenImage from '../images/kviberg.jpg'
import ecommerceImage from '../images/marketplace.jpg'
import forumImage from '../images/forum.png'
import dinoImage from '../images/dino.avif'

const data = {
    projects: [
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Portfolio web app to store all of my projects & information neatly in one space",
            timeStamp: "2024",
            picture: portfolioImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/portfolio",
            deployLink: "",
        },
        {
            id: "klatterdomen",
            title: "Project 004 - Klätterdomen",
            description: "A React web app created by me with the intention of getting better at TailwindCSS & SASS/SCSS while also experimenting with layouts.",
            timeStamp: "2023",
            picture: klatterdomenImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Klatterdomen",
            deployLink: "",
        },
        {
            id: "ecommerce",
            title: "Project 003 - E-Commerce",
            description: "A React web app created by me and two classmates with the intention of learning React, Stripe, Socket.IO TailwindCSS & continue refining frontend technologies.",
            timeStamp: "2023",
            picture: ecommerceImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/project-3-client",
            deployLink: "",
        },
        {
            id: "forum",
            title: "Project 002 - Forum",
            description: "A Handlebars web app created by me and a classmate with the intention of learning backend technologies such as creating our own database, schemas & routes.",
            timeStamp: "2023",
            picture: forumImage,
            role: "Development",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Project-2",
            deployLink: "",
        },
        {
            id: "dinoGame",
            title: "Project 001 - Dino Game",
            description: "A game created by me and a classmate with the intention of learning JavaScript classes and it's uses, as well as canvas.",
            timeStamp: "2023",
            picture: dinoImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/IronhackProjectOne",
            deployLink: "",
        },
    ],
    technologoies: ["React", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "REST API", "Socket.IO", "SCSS", "TailwindCSS", "JavaScript", "CSS", "HTML", "Axios", "Mongoose", "Cloudinary"],
}

export default data;