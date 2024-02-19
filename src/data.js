import projOne from "../src/images/simpleElegance.jpg";
import projTwo from "../src/images/aegis_resilience.jpg";
import projThree from "../src/images/benchPress.jpg";
// import javascript from "../src/images/javascript.svg";
import projFour from "../src/images/study.jpg";
import shopify from "../src/images/shopify_Logo.svg";
import react from "../src/images/reactjs.svg";

export const logo = [{ id: 1, href: "fa-solid fa-code" }];

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#skills", text: "skills" },
  { id: 3, href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: 1,
    img: "fa-brands fa-html5",
    alt: "html5 logo",
    text: "",
  },
  {
    id: 2,
    img: "fa-brands fa-css3-alt",
    alt: "CSS3 logo",
    text: "",
  },
  {
    id: 3,
    img: "fa-brands fa-js",
    alt: "Javascript logo",
    text: "",
  },
  {
    id: 4,
    img: "fa-brands fa-react",
    alt: "React logo",
    text: " Currently Learning",
  },
  {
    id: 5,
    img: "fa-brands fa-shopify",
    alt: "Shopify logo",
    text: "Limited Experience",
  },
  {
    id: 6,
    img: "fa-brands fa-wordpress",
    alt: "Word Press logo",
    text: "Limited Experience",
  },
  {
    id: 7,
    img: "fa-brands fa-squarespace",
    alt: "nopCommerce logo",
    text: "Limited Experience",
  },
  {
    id: 8,
    img: "fa-brands fa-angular",
    alt: "Angular logo",
    text: "Limited Experience",
  },
  {
    id: 9,
    img: "fa-solid fa-database",
    alt: ".NET Core logo",
    text: "Limited Experience",
  },
  {
    id: 10,
    img: "fa-brands fa-java",
    alt: "MySql logo",
    text: "Limited Experience",
  },
];

export const projects = [
  {
    id: 1,
    img: projOne,
    imgAlt: "restaurant link",
    title: "simple elegance",
    logo: react,
    logoAlt: "react logo",
    text: "Built with: Vite, React Router DOM Libraries and React Icons ",
    link: "https://simple-elegance.netlify.app/",
  },
  {
    id: 2,
    img: projTwo,
    imgAlt: "Aegis Academy link",
    title: "aegis academy",
    logo: shopify,
    logoAlt: "shopify logo",
    text: "I built this site for a client using Shopify. Other ecommerce sites I have worked with are WordPress, Squarespace and nopCommerce.",
    link: "https://aegisacademy.com/",
  },
  {
    id: 3,
    img: projThree,
    imgAlt: "Muscle Gains",
    title: "muscle gains",
    logo: react,
    logoAlt: "react logo",
    text: "I built this site in the React course I am currently taking. I'm excited about learning the ReactFramework.",
    link: "https://muscle-gains.netlify.app/",
  },
  {
    id: 4,
    img: projFour,
    imgAlt: "Backroads App link",
    title: "cue cards app",
    logo: react,
    logoAlt: "react logo",
    text: "I built this cue card app so I could reinforce the skills learnt in a React course. I primarily use this app on my phone.",
    link: "https://react-cue-cards.netlify.app",
  },
];

export const socialIcons = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/kenneth-cherry-8a308412b/",
    icon: "fab fa-linkedin",
  },
  {
    id: 2,
    href: "https://www.freecodecamp.org/kencherry",
    icon: "fa-brands fa-free-code-camp",
  },
  { id: 3, href: "https://github.com/ken-cherry", icon: "fa-brands fa-github" },
];
