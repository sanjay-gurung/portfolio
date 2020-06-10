import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';


const PROJECTS = [
    {
        id: 1,
        title: "My Portfolio",
        description: "This very web site that I built in React, involving JavaScript and core development concepts.",
        image: project1,
        github: "https://github.com/sanjay-gurung/portfolio",
    },
    {
        id: 2,
        title: "Recipe Book",
        description: "This is a web application that I built in Angular that showcases CRUD operations, authentication and other basic e-commerce functionalities.",
        image: project2,
        github: 'https://github.com/sanjay-gurung/recipe-book',
        link: "https://recipe-book-7a044.web.app/"
    },
    {
        id: 3,
        title: "Music Master",
        description: "This is a fun little application that I build in React that fetches data using Spotify's api. User can search for any artist and listen to their top tracks.",
        image: project3,
        github: 'https://github.com/sanjay-gurung/music-master',
        link: "https://sanjay-gurung.github.io/portfolio-old/#/music-master"
    }

]

export default PROJECTS;