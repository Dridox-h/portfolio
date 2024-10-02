import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";


export const HERO_CONTENT = `Actuellement en deuxième année d'études à l'Université de Technologie de Belfort-Montbéliard (UTBM), je me destine à devenir ingénieur informatique spécialisé en cybersécurité. J'ai décidé de créer ce portfolio pour montrer mes compétences et ainsi trouver une alternance en informatique pour septembre 2025.`;

export const ABOUT_TEXT = `Passionné d'informatique depuis que j'ai appris à utiliser un ordinateur, je m'inscris dans une démarche de création lorsque je suis confronté à différents problèmes. Vous trouverez sur ce site une variété de projets que j'ai réalisés pendant ma scolarité et pendant mon temps libre. J'apprécie également l'impression 3D (FDM et SLA), ainsi que la modélisation 3D sur Fusion 360, et le sport, notamment la musculation.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2028",
    role: "Etudiant",
    company: "UTBM",
    description: `Étudiant à l'UTBM en 2ème année. J'ai été élu président de la promotion 25, où j'ai pu diriger une association et comprendre les tenants et aboutissants qui en découlaient.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2024 - 2024",
    role: "Stage ouvrier",
    company: "Hendrickson",
    description: "Dans le cadre de ma scolarité à l'UTBM j'ai du réaliser un stage sur une chaîne de production, j'ai pu avoir une première approche du monde professionnel.",
    technologies: ["Organisation","Autonomie","Polyvalence"],
  },
  {
    year: "2021 - 2023",
    role: "Etudiant",
    company: "Lycée lucien Herr",
    description: `Obtention du bac mention très bien. Spécialité Math-experte/NSI`,
    technologies: ["Python", "PHP", "Json"],
  },
  {
    year: "2020 - 2020",
    role: "Stage d'observation de 3ème",
    company: "Logitude Mulhouse",
    description: `Observation des differents services d'une entreprise spécialisée dans les solutions informatique pour les municipalités`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "2048 en C",
    image: project1,
    description:
      "Lors de notre première UE en informatique, nous avons reproduit le jeu 2048 en C dans le terminal. De plus, nous avons appris à partager nos fichiers via GitHub en utilisant Git.",
    technologies: ["C", "Git", "GitHub"],
    category: "scolaire",
  },
  {
    title: "Maquette de porte automatisée avec des capteurs Arduino et communication bidirectionnelle via Node-RED avec ESP32",
    image: project2,
    description:
      "Nous avons conçu une maquette de porte automatisée gérant différents capteurs d'entrée (biométrique, RFID, clavier) et envoyant les données à Node-RED via une connexion MQTT.",
    technologies: ["Arduino", "Node-RED", "ESP32"],
    category: "scolaire",
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "Création d'un portfolio en React, en utilisant Tailwind CSS et Framer Motion pour les animations.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind", "CoreUI"],
    category: "personnel",
  },
  {
    title: "NAS avec OpenMediaVault et Portainer",
    image: project4,
    description:
      "J'ai transformé un ancien PC portable en serveur fonctionnel avec OpenMediaVault (OMV), permettant notamment d'héberger une instance d'OctoPrint et un serveur de jeu.",
    technologies: ["OMV", "Portainer", "Docker", "OctoPrint"],
    category: "personnel",
  },
  {
    title: "HOXX VPN",
    image: project5,
    description:
      "Participation à la qualité du contrôle de HOXX VPN, un VPN pour navigateur, en hébergeant deux instances Docker avec PUTTY et OpenMediaVault (OMV).",
    technologies: ["OMV", "Docker"],
    category: "personnel",
  },
  {
    title: "Recycler PET pour imprimante 3d",
    image: project6,
    description:
      "Conception d'une machine permettant de découper les bouteilles plastiques faites en PET pour pouvoir le transformer en filament utilisable par une imprimante 3D",
    technologies: ["Fusion 360","impression 3D"],
    category: "personnel",
  }
];

export const CONTACT = {
  phoneNo: "+33 6 32 35 22 17",
  email: "bastien.heitzmann@gmail.com",
};
