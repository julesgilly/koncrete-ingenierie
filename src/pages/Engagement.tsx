import { Building, Ruler, Zap } from 'lucide-react';

export default function Engagement() {
    return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-8 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                Nos Engagements
                <span className="absolute left-1/2 bottom-[-8px] w-24 h-1 bg-gray-900 transform -translate-x-1/2"></span>
            </h2>

                <p className="text-gray-600 max-w-3xl mx-auto pt-8">
                Nos équipes, passionnées et engagées, accompagnent nos clients dans la concrétisation de leurs projets, en veillant à maîtriser budgets et délais.
                </p>
            </div>
        </div>

    <div className="min-h-screen bg-gray-50 pt-8 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-lg">
                    <Zap className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">RÉACTIVITÉ</h3>
                    <p className="text-gray-600 text-justify">
                    Nous traitons vos demandes, en respectant vos priorités et en apportant des solutions, dans les meilleurs délais.
                    </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg">
                    <Ruler className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">TECHNICITÉ</h3>
                    <p className="text-gray-600 text-justify">
                    Nous apportons des solutions précises et adaptées, en garantissant une expertise technique conforme aux exigences de votre projet.
                    </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg">
                    <Building className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">FLEXIBILITÉ</h3>
                    <p className="text-gray-600 text-justify">
                    Nous nous adaptons à vos besoins et contraintes, en proposant des solutions sur mesure.
                    </p>
                    </div>
                </div>
        </div>
    </div>
</section>
    );
  }