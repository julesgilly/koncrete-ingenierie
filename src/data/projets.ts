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
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      location: " 6, rue de Messine - 75008 Paris",
      client: "Dumez",
      phase: "Exécution",
      startDate: "Janvier 2023",
      endDate: "Courant 2025",
      budget: "-M €",
      surface: "7 450 m²",
      description: "-",
      detailedDescription: "-"
    },
    {
      id: "centre_aquatique",
      title: "Centre aquatique de la Grenouillère",
      imageMiniature: "/Projets/Grenouillère/Miniature_Grenouillere.webp",
      image: "/Projets/Grenouillère/Grenouillère_2.webp",
      location: "4, avenue Sully Prudhomme - 92160 Antony",
      client: "Léon Grosse",
      phase: "Exécution",
      startDate: "Février 2024",
      endDate: "2026",
      budget: "55M €",
      surface: "22 000 m²",
      description: "-",
      detailedDescription: "-"
    },
    {
      id: "mennecy",
      title: "Création d'un ensemble immobilier de 68 logements",
      imageMiniature: "/Projets/Mennecy/Miniature_Mennecy.webp",
      image: "/Projets/Mennecy/Capture d'écran 2025-03-21 104121.png",
      location: "3-15, avenue de la Jeannotte - 91540 Mennecy",
      client: "RH Construction",
      phase: "Exécution",
      startDate: "Octobre 2024",
      endDate: "NC",
      budget: "-M €",
      surface: "4 109 m²",
      description: "-",
      detailedDescription: "-"
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