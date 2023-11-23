// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

import Tableau from "./images/Tableau.svg"

import Pbi from "./images/PBI.svg"

import Python from "./images/python.svg"
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Sawy0";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="skill-icons:linkedin" />;


/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Experienced data analyst specializing in telecommunications and e-commerce with a robust tech stack including Domo, Python, Excel, PowerBI, Tableau, SQL, and more. Proven track record in optimizing network performance, improving user experience, and driving data-driven strategies. Proficient in SQL for efficient data manipulation and skilled in creating interactive dashboards with tools like PowerBI and Tableau. Collaborative and results-driven, committed to contributing effectively to diverse industries through continuous learning and impactful insights.";

/* Skills
 **************************************************************
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <img src="https://web-assets.domo.com/miyagi/images/logo/brand/color/logo-brand-domo-color.svg" className="display-4" style={{ height: 74, width: 216 }} />,
    name: "Domo",
  },
  {
    id: 3,
    skill: <Icon icon="logos:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 4,
    skill: <Icon icon="logos:microsoft-power-bi" className="display-4" />,
    name: "PowerBI",
  },
  {
    id: 5,
    skill: <Icon icon="logos:tableau" className="display-4" />,
    name: "tableau",
  },
  {
    id: 6,
    skill: <Icon icon="logos:looker" className="display-4" />,
    name: "Google Looker",
  },
  {
    id: 7,
    skill: <Icon icon="logos:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 **************************************************************
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Tableau-Dashboards", "PowerBi-Dashboards", "We-Rate-Dogs-Analysis-Project"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "Tableau-Dashboards",
    image: Tableau
  },
  {
    name : "PowerBi-Dashboards",
    image: Pbi
  },
  {
    name: "We-Rate-Dogs-Analysis-Project",
    image: Python
  }
];

/* Contact Info
 **************************************************************
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mdorvqyw";
