import {
    ahmet,
    backend,
    creator,
    css,
    docker, exorditech,
    figma,
    git,
    gpt,
    html,
    huseyin,
    burak,
    javascript,
    ligep,
    meta,
    mobile,
    mongodb,
    nodejs,
    portfolio, ravensoft,
    reactjs,
    redux, sbbitd,
    shopify,
    starbucks,
    tailwind,
    tesla,
    threejs,
    typescript,
    web,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Gamer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Intern",
        company_name: "Exorditech",
        icon: exorditech,
        iconBg: "#383E56",
        date: "June 2021 - July 2021",
        points: [
            "Completed an internship focused on creating advanced websites using PHP, HTML5, CSS3, and JavaScript.",
            "Gained valuable experience in understanding the features and requirements of these web development languages and their applications in creating advanced websites.",
            "Gained hands-on experience in developing websites with advanced features, including interactivity, responsive design, and dynamic content.",
            "Developed skills in web development and learned about the latest trends and technologies in the field.",
            "Overall, the internship was a valuable experience that provided an opportunity to gain practical experience in web development."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Sakarya Metropolitan Municipality IT Department",
        icon: sbbitd,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Jan 2023",
        points: [
            "Worked at the Software Park project, a collaboration between Sakarya University, Sakarya University of Applied Sciences, and Sakarya Metropolitan Municipality.",
            "Contributed to the development of software applications using ASP.Net Core 6, Angular, and JS technologies.",
            "Provided technical support and worked collaboratively with the team to ensure that the project was delivered on time and met the needs of all stakeholders.",
            "Gained valuable experience in software development through the project.",
            "Contributed to the success of an important collaboration between academia and local government."
        ],
    },
    {
        title: "Web Developer",
        company_name: "RavenSoft",
        icon: ravensoft,
        iconBg: "#383E56",
        date: "Jan 2023 - Present",
        points: [
            "Ravensoft is a web development company specializing in building websites and web applications using WordPress, React, and PHP Laravel technologies.",
            "The company has a team of experienced developers dedicated to delivering high-quality solutions that meet the unique needs of each client.",
            "Ravensoft uses a client-focused approach, working closely with clients to understand their goals and objectives.",
            "The company then develops customized solutions to help clients achieve their desired outcomes, whether it's building a new website, creating a custom web application, or providing ongoing maintenance and support.",
            "Ravensoft is committed to delivering exceptional results and providing outstanding customer service."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I was blown away by the quality of work and attention to detail in my project. The team's use of React and Three.js resulted in a visually stunning and interactive experience.",
        name: "Burak Sürümcüoğlu",
        designation: "IT",
        company: "Develhope",
        image: burak,
    },
    {
        testimonial:
            "I had a wonderful experience working with this team. Their use of Tailwind CSS made it easy for me to customize my site to fit my brand.",
        name: "Ahmet Mahmut Alperen",
        designation: "Board Member",
        company: "Ankara University",
        image: ahmet,
    },
    {
        testimonial:
            "I highly recommend this team for anyone looking to build a portfolio site. Their expertise in React, Three.js, and Tailwind CSS.",
        name: "Huseyin Ömer Güvenç",
        designation: "Tutor",
        company: "Develhope",
        image: huseyin,
    },
];

const projects = [
    {
        name: "LIGEP",
        description:
            "I developed lidergelisim.com with HTML, CSS, and JavaScript, Bootstrap for responsive design. Google Analytics and Cloudflare were integrated for analytics and website optimization. The technical implementation aimed for a fast, and user-friendly experience for visitors.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: ligep,
        source_code_link: "https://lidergelisim.com/",
    },
    {
        name: "GPT-3",
        description: "I built GPT-3 Design with React for the front-end and hosted it on a Linux server. The project uses a reverse proxy server to handle HTTP requests, providing a user-friendly experience. The app leverages modern web development tools to generate high-quality design assets.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: gpt,
        source_code_link: "https://github.com/AlptekinOcakdan/gbt_react",
    },
    {
        name: "3D Portfolio",
        description:
            "I built my portfolio site using React, Three.js, and Tailwind CSS. With Three.js, I created 3D visualizations for a more immersive experience. The use of Tailwind CSS allowed for quick and easy styling. The result is a visually appealing and user-friendly site that showcases my work and skills.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/AlptekinOcakdan/3d_portfolio",
    },
];

export {services, technologies, experiences, testimonials, projects};