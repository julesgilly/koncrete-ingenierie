import { GraduationCap } from 'lucide-react';

const team = [
  {
    name: "Hélène LABUSSIERE",
    role: "Ingénieure structure - Gérante",
    image: "Profil_Helene.webp",
    diplomas: [
        "Diplôme d'ingénieure : INSA Lyon"
    ],
    email: "h.labussiere@koncrete-ing.fr"
  },
  {
    name: "Datev ZADIGUIAN",
    role: "Ingénieur structure - Associé-salarié",
    image: "Profil_Datev.webp",
    diplomas: [
        "Diplôme d'ingénieur : Mines d'Alès"
    ],
    email: "d.zadiguian@koncrete-ing.fr"
  },
  {
    name: "Jules GILLY",
    role: "Ingénieur structure - Associé-salarié",
    image: "Profil_Jules.webp",
    diplomas: [
      "Diplôme d'ingénieur - Master : ESTP",
      "Master of Science en 'Mécanique des Structures' : UCLA"
    ],
    email: "j.gilly@koncrete-ing.fr"
  }
];

export function Team() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                Notre Équipe
            </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-96 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                
                <div className="space-y-3">
                  <h4 className="items-center text-sm font-medium text-gray-700">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    Diplômes
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {member.diplomas.map((diploma, idx) => (
                      <li key={idx} className="pl-7">• {diploma}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre équipe pluridisciplinaire combine expertise technique et créativité pour relever les défis 
            les plus complexes en matière de construction. Nous croyons en l'importance d'une approche collaborative 
            et innovante pour créer des structures durables qui façonnent positivement notre environnement bâti.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chaque membre de notre équipe apporte une perspective unique et une expertise spécialisée, 
            nous permettant d'offrir des solutions complètes et sur mesure à nos clients. Notre engagement 
            envers l'excellence technique et la satisfaction client guide chacune de nos actions.
          </p>
        </div>
      </div>
    </div>
  );
}