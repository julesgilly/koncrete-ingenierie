import { Building, Ruler, Zap } from 'lucide-react';
import { Search, HardHat, ClipboardCheck, CheckCircle } from 'lucide-react';

const missions = [
    {
      icon: Search,
      title: "Diagnostics et faisabilité",
      items: [
        "Nous analysons l'état existant et ses contraintes.",
        "Nous évaluons la faisabilité technique et économique.",
        "Nous définissons des pistes d'intervention adaptées et les solutions de renforcement structurel."
      ]
    },
    {
      icon: Ruler,
      title: "Conception",
      items: [
        "Toutes phases : PC, APS, APD, PRO et DCE.",
        "Réalisation des pièces du marché : pièces écrites (CCTP, notice structurelle, ...) et graphiques.",
        "Nous veillons à la cohérence technique et réglementaire.",
      ]
    },
    {
      icon: HardHat,
      title: "Exécution",
      items: [
        "Réalisation des plans d'exécution : coffrage et armatures.",
        "Dimensionnement, optimisation et calcul des éléments structurels.",
        "Participation aux réunions ETUDES et SYNTHESE."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Suivi de travaux",
      items: [
        "Toutes phases : ACT, VISA, DET.",
        "Contrôle de la conformité des interventions sur chantier.",
        "Nous validons les études et garantissons leur bonne application.",
      ]
    }
  ];

export default function Engagement() {
    return (
    <>
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-8 mb-4">
                <h2 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                Philosophie
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto pt-4">
                Notre philosophie en quelques mots.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="pt-8 mb-16">
                    <h2 className="text-m text-gray-900 font-bold text-justify mb-4">Notre philosophie d’entreprise s’appuie sur la double ambition de fournir une prestation technique de qualité afin d'assister nos clients à la réalisation de leur projet tout en restant fidèles à nos valeurs coopératives.</h2>

                    <h2 className="text-m text-gray-900 text-justify mb-4">En tant que société coopérative, nous misons sur l’engagement collectif et la responsabilité partagée pour garantir la qualité de nos réalisations. Notre équipe réunit des ingénieurs qui veillent autant à la performance technique de chaque projet neuf qu’au respect et à la valorisation des structures anciennes.</h2>

                    <h2 className="text-m text-gray-900 text-justify mb-4">Nous intervenons sur des ouvrages neufs, avec la volonté de mettre en œuvre des approches à la fois sobres, innovantes et respectueuses de l’environnement. Notre démarche s’appuie sur une connaissance approfondie des contraintes réglementaires et techniques, ainsi que sur une capacité à orchestrer les compétences nécessaires à une exécution rigoureuse.</h2>

                    <h2 className="text-m text-gray-900 text-justify mb-4">Dans le même temps, nous continuons à cultiver notre expertise en réhabilitation et en consolidation du bâti existant. Nous sommes convaincus que la compréhension fine de chaque édifice – sa structure, ses pathologies, son évolution – est la clé pour proposer des interventions pérennes et respectueuses de son identité. Humbles face aux savoir-faire traditionnels et à la longévité des matériaux anciens, nous privilégions les solutions de renforcement qui s’appuient sur un équilibre entre techniques modernes et méthodes éprouvées.</h2>
                </div>
                <div className="pt-8 mb-16">

                    <h2 className="text-m text-gray-900 text-justify mb-4">Par ailleurs, notre structuration en coopérative nous incite à placer la collaboration au cœur de notre pratique : une communication fluide et une compréhension mutuelle des priorités de chacun sont essentielles pour mener à bien tant un projet de construction neuve qu’une opération de restauration.</h2>

                    <h2 className="text-m text-gray-900 text-justify mb-4">En somme, notre coopérative défend une vision où sérieux, compétence et solidarité s’unissent pour proposer des solutions structurelles adaptées aussi bien aux ouvrages neufs qu’aux bâtiments existants. Nous restons convaincus que cette alliance de technicité et de valeurs humaines constitue la meilleure voie pour bâtir, réhabiliter et consolider durablement, dans le respect de notre héritage commun et la responsabilité envers les générations futures.</h2>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                Engagements
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto pt-4">
                Nos équipes, passionnées et engagées, accompagnent nos clients dans la concrétisation de leurs projets, en veillant à maîtriser budgets et délais.
                </p>
            </div>
        </div>

        <div className="bg-white pt-8 mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 shadow-lg">
                        <Zap className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-4">RÉACTIVITÉ</h3>
                        <p className="text-gray-600 text-justify">
                        Nous traitons vos demandes, en respectant vos priorités et en apportant des solutions, dans les meilleurs délais.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 shadow-lg">
                        <Ruler className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-4">TECHNICITÉ</h3>
                        <p className="text-gray-600 text-justify">
                        Nous apportons des solutions précises et adaptées, en garantissant une expertise technique conforme aux exigences de votre projet.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 shadow-lg">
                        <Building className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-4">FLEXIBILITÉ</h3>
                        <p className="text-gray-600 text-justify">
                        Nous nous adaptons à vos besoins et contraintes, en proposant des solutions sur mesure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                Missions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto pt-4">
                Une expertise complète pour accompagner vos projets de la conception à la réalisation.
                </p>
            </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
            {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                <div 
                    key={index} 
                    className="bg-gray-50 shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
                    
                    <div className="relative z-10">
                    <div className="flex items-center mb-6">
                        <div className="bg-gray-50 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold ml-4">{mission.title}</h3>
                    </div>
                    
                    <ul className="space-y-4">
                        {mission.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                );
            })}
            </div>
        </div>

        {/* Call to action section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
                <p className="text-gray-600 mb-6">
                    Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
                </p>
                <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                    Nous contacter
                </a>
            </div>
        </div>

    </section>
    </>
    );
  }