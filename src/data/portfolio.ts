import type { PersonalInfo, Project } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Andre Keith MULAMBA TSHISHIKA",
  email: "mulambakeith3@gmail.com",
  phone: "07 83 26 26 55",
  github: "https://github.com/Keithos93",
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-keith-mulamba-tshishika-a33065282/",
  description:
    "Étudiant en deuxième année à SUPINFO, je prépare un Master of Engineering avec une spécialisation en développement backend. Passionné par les technologies et la résolution de problèmes complexes, je recherche une alternance de 3 ans pour valider mon diplôme et contribuer activement aux projets d'une entreprise innovante.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Java",
    "PHP",
    "Node.js",
  ],
};

export const projects: Project[] = [
  {
    title: "Supcity",
    description:
      "Jeu de simulation urbaine développé dans un cadre académique. Le joueur fait évoluer une civilisation de la préhistoire à l'âge du fer en construisant des bâtiments, en gérant des ressources et en simulant le comportement des citoyens.",
    image: "/images/Supcity.PNG",
    technologies: [
      "Java",
      "Simulation",
      "Gestion de ressources",
      "Interface utilisateur",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/mohzerra/supcity/branches",
  },
  {
    title: "Istore Ltd",
    description:
      "Application de gestion d'inventaire développée en binôme avec interface utilisateur Java. Inclut l'authentification sécurisée, gestion CRUD des utilisateurs, rôles et administration des magasins et stocks.",
    image: "/images/istore.PNG",
    technologies: [
      "Java",
      "Interface utilisateur",
      "CRUD",
      "Authentification",
      "Gestion de rôles",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Keithos93/My-words/tree/master/MulambaTshishikaAndreKeith/JavaApp",
  },
  {
    title: "Site Web type netflix",
    description:
      "Application web permettant de demander aux clients, via un site internet, quels films seront projetés chaque jour en salle.",
    image:
      "images/Site.PNG",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "UX/UI", "Sécurité"],
    liveUrl: "",
    githubUrl: "https://github.com/Keithos93/My-words/tree/master/Javascript",
  },
];
