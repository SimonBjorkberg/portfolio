import portfolioImage from '../images/info.png'
import klatterdomenImage from '../images/kviberg.jpg'
import ecommerceImage from '../images/marketplace.jpg'
import forumImage from '../images/forum.png'
import dinoImage from '../images/dino.avif'
import pokeDexImage from '../images/pokeDex.png'

import portfolioRating from '../images/PortfolioRating.png'

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
            technologies: ["React", "TailwindCSS", "JavaScript", "HTML"],
            lighthouseRating: portfolioRating,
        },
        {
            id: "newForum",
            title: "Project 005 - TypeScript Forum (WIP)",
            description: "A PC only forum that I made to learn the basics of TypeScript and Next.JS, Essentialy improved the first forum that I created during the Ironhack Bootcamp in addition to learning a lot about defining types",
            timeStamp: "2024",
            picture: "",
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/typescript-forum-client",
            githubLinkTwo: "https://github.com/SimonBjorkberg/typescript-forum-server",
            deployLink: "",
            technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "MongoDB", "JWT", "Express", "Rest API", "TailwindCSS", "Mongoose", "Node.JS"],
            lighthouseRating: "",
        },
        {
            id: "pokemonApi",
            title: "Project 006 - Pokedex (WIP)",
            description: "A PC only Pokedex using the Pokemon API made in TypeScript, created this project to continue working with objects and these proved to be massive, Further improved my typescript capabilites with this project",
            timeStamp: "2024",
            picture: pokeDexImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/pokemon-ts",
            deployLink: "",
            technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "Rest API", "TailwindCSS"],
            lighthouseRating: "",
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
            technologies: ["React", "TailwindCSS", "SCSS", "JavaScript", "HTML"],
            lighthouseRating: "",
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
            technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "MongoDB", "Node.JS", "Express", "JWT", "Rest API", "Socket.IO", "Axios", "Mongoose", "Cloudinary"],
            lighthouseRating: "",
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
            technologies: ["HBS", "Express", "Node.JS", "MongoDB", "JavaScript", "Axios", "Rest API", "TailwindCSS", "CSS", "HTML", "Mongoose", "Cloudinary"],
            lighthouseRating: "",
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
            technologies: ["JavaScript", "CSS", "HTML"],
            lighthouseRating: "",
        },
    ],
    technologoies: ["React", "Next.JS", "TypeScript", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "Rest API", "Socket.IO", "SCSS", "TailwindCSS", "JavaScript", "CSS", "HTML", "Axios", "Mongoose", "Cloudinary"],
}

export default data;