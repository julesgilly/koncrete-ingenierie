export interface Project {
  id: string;
  title: string;
  imageMiniature: string;
  image: string;
  location: string;
  client: string;
  phase: string;
  startDate: string;
  endDate: string;
  budget: string;
  surface: string;
  description: string;
  detailedDescription: string;
}


export const projects = [
    {
      id: "messine",
      title: "Restructuration d'un ensemble immobilier architectural",
      imageMiniature: "/Projets/Messine/Messine.webp",
      image: [
        {url:"/Projets/Messine/Messine_1.webp",
        alt: "Dessin archi"},
      ],
      location: " 6/8, rue de Messine - 75008 Paris",
      client: "Dumez",
      phase: "Exécution",
      startDate: "Janvier 2023",
      endDate: "Avril 2025",
      budget: "26M €",
      surface: "7 450 m²",
      description: "Le bâtiment situé au 6-8, avenue de Messine à Paris est un exemple marquant de l’architecture haussmannienne du XIXe siècle.",
      detailedDescription: `Conçu en 1875 par l’architecte Édouard Dainville pour la Compagnie d’assurances La Nationale, il s’inscrit dans la transformation urbaine d’un ancien site industriel en un ensemble résidentiel raffiné.
      Sa façade en pierres de taille se distingue par ses ornements élaborés, incluant corniches, pilastres décoratifs et balcons continus. Ainsi, ce bâtiment se présente comme un témoignage d’excellence technique et de raffinement esthétique, alliant histoire, patrimoine et adaptation aux exigences contemporaines. 
      Les principales intentions de ce projet comprennent, entre autres :
      - Une restructuration des sous-sols pour l’installation de locaux techniques, fitness, foyer, salle polymorphe, cuisine, réserve, archives, local déchets, vestiaires, …
      - Une restructuration du RDC pour l’installation d’un accueil, salons informels, cafétéria, ...
      - Une mise en valeur de la cour intérieure avec la création d’une verrière et de zones plantées
      - Une mise en valeur de la façade et de l’entrée principale`
    },
    {
      id: "centre_aquatique",
      title: "Centre aquatique de la Grenouillère",
      imageMiniature: "/Projets/Grenouillère/Miniature_Grenouillere.webp",
      image: [
        {url:"/Projets/Grenouillère/Grenouillère_2.webp",
        alt: "Vue VPP"},
        {url:"/Projets/Grenouillère/Grenouillère_3.webp",
          alt: "Vue des bassins - 28/03/2025"},
        {url:"/Projets/Grenouillère/Grenouillère_4.webp",
          alt: "Vue des gradins et poutres crémaillères - 28/03/2025"},
      ],
      location: "4, avenue Sully Prudhomme - 92160 Antony",
      client: "Léon Grosse",
      phase: "Exécution",
      startDate: "Février 2024",
      endDate: "2026",
      budget: "78.4M €",
      surface: "22 000 m²",
      description: " ",
      detailedDescription: "Le département des Hauts-de-Seine, propriétaire de la piscine de La Grenouillère à Antony, réaménage le site pour y édifier un centre aquatique moderne. Conçue dans les années 1970 et nécessitant une mise aux normes, l'infrastructure fait l'objet d'études depuis son acquisition en 2016 afin de proposer un équipement innovant, fonctionnant toute l'année tout en conservant l’attrait estival qui lui a valu sa renommée. Ce nouveau centre intégrera une dimension éducative (séances de natation scolaire) et sportive, avec plusieurs bassins permettant aux associations de bénéficier de créneaux sans conflit d’usage, et un bassin sportif intérieur homologué par la Fédération française de natation."
    },
    {
      id: "mennecy",
      title: "Création d'un ensemble immobilier de 68 logements",
      imageMiniature: "/Projets/Mennecy/Miniature_Mennecy.webp",
      image: [
        {url:"/Projets/Mennecy/Capture d'écran 2025-03-21 104121.png",
        alt: "Dessin archi"},
      ],
      location: "3-15, avenue de la Jeannotte - 91540 Mennecy",
      client: "RH Construction",
      phase: "Exécution",
      startDate: "Octobre 2024",
      endDate: "2026",
      budget: "NC",
      surface: "4 109 m²",
      description: "Construction de 68 logements en 4 bâtiments et 5 locaux d'activités dont un auditorium.",
      detailedDescription: "La spécificité du projet consiste à créer un espace scénique à l'intérieur de l'auditorium, pouvant accueillir différents types d'activités de représentation musicale avec sonorisation. "
    },
    /**
    {
      id: "campus_aken",
      title: "Construction neuve d'un bâtiment d'enseignement supérieur",
      imageMiniature: "/Projets/AKEN/AKEN.webp",
      image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80",
      location: "ZAC Gare la Vallée - 80000 Amiens",
      client: "A26",
      phase: "Conception: PRO / DCE",
      startDate: "Janvier 2026 (Prévisionnel)",
      endDate: "Septembre 2028",
      budget: "27M € TTC",
      surface: "10 800 m²",
      description: "-",
      detailedDescription: "-"
    } */
  ];