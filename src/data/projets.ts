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
      imageMiniature: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      location: " 6, rue de Messine - 75008 Paris",
      client: "Dumez",
      phase: "Exécution",
      startDate: "01/01/2023",
      endDate: "31/12/2052",
      budget: "10M €",
      surface: "3000 m²",
      description: "-",
      detailedDescription: "-"
    },
    {
      id: "centre_aquatique",
      title: "Centre aquatique de la Grenouillère",
      imageMiniature: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&q=80",
      location: "4, avenue Sully Prudhomme - 92160 Antony",
      client: "Léon Grosse",
      phase: "Exécution",
      startDate: "01/01/2023",
      endDate: "31/12/2052",
      budget: "55M €",
      surface: "1000 m²",
      description: "-",
      detailedDescription: "-"
    },
    {
      id: "mennecy",
      title: "Création d'un ensemble immobilier de 68 logements",
      imageMiniature: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&q=80",
      location: "3-15, avenue de la Jeannotte - 91540 Mennecy",
      client: "RH Construction",
      phase: "Exécution",
      startDate: "01/01/2023",
      endDate: "31/12/2052",
      budget: "15M €",
      surface: "1000 m²",
      description: "-",
      detailedDescription: "-"
    },
    {
      id: "campus_aken",
      title: "Construction neuve d'un bâtiment d'enseignement supérieur",
      imageMiniature: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80",
      image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80",
      location: "ZAC Gare la Vallée - 80000 Amiens",
      client: "A26",
      phase: "Conception: PRO / DCE",
      startDate: "01/01/2023",
      endDate: "31/12/2052",
      budget: "15M €",
      surface: "1000 m²",
      description: "-",
      detailedDescription: "-"
    }
  ];