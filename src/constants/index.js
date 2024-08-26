import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";


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
      "Durant la première UE de nos cours d'informatique, nous avons pu reproduire le jeu du 2048 en C dans le terminal. De plus nous avons partager nos fichier via github en utilisant git",
    technologies: ["C",'Git',"Github"],
    category : "scolaire"
  },
  {
    title: "Maquette de porte automatisée par des capteurs arduino, liaison bidirectionnel avec Node-red en utilisant des esp32",
    image: project2,
    description:
      "nous avons du créer une maquette de porte qui fesait la gestion automatique des capteurs d'entrées (biométrique, rfid , keypad), tout en envoyant sur node red en connexion MQTT les données",
    technologies: ["Arduino", "Node-red", "Esp32"],
    category : "scolaire"
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "Création d'un portfolio en react en utilisant tailwind et frame motion",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Tailwind","coreui"],
    category : "personnel"
  },
  {
    title: "NAS avec OpenMediaVault et Portainer ",
    image: project4,
    description:
      "J'ai transformer un ancien pc portable en server fonctionnelle en utilisant OMV, j'ai pu notamment hébérger une instance d'Octoprint et un serveur de jeu",
    technologies: ["OMV","Portainer","Docker","Octoprint"],
    category : "personnel"
  },
  {
    title: "HOXX VPN",
    image: project5,
    description:
      "Contribution à la quality control de hoxx VPN, un VPN pour navigateur en hostant 2 instances docker en utilisant PUTTY et OMV",
    technologies: ["OMV","Docker"],
    category : "personnel"
  }
];

export const CONTACT = {
  phoneNo: "+33 6 32 35 22 17",
  email: "bastien.heitzmann@gmail.com",
};
