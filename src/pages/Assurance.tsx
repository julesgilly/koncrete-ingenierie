export function Assurance() {
    const insuranceDetails = {
        company: "QBE Europe SA/NV",
        contractNumber: "25015814769",
        type: "Responsabilité Civile et Décennale Professionnelle",
        coverage: "15 000 000 €",
        startDate: "17/03/2025",
        activity: "BET Structure (tous matériaux)",
        lien: <a href="https://api-gateway.april.fr/iard/jetons/v2/2KyUHNc1U5vvnch2zPSkon54ibxqIBOXrhXLhMhjU2U4tVljqI1hE_LxlVZUev2khtHrCjKYJ6fsyEeOnrVN3Q" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Lien vers attestation</a>
    };

    const getLabel = (key: string): string => {
        const labels: { [key: string]: string } = {
          company: "Compagnie d'assurance",
          contractNumber: "Numéro de contrat",
          type: "Type d'assurance",
          coverage: "Montant de couverture",
          startDate: "Date de début",
          activity: "Activités couvertes",
          lien: "Télécharger notre attestation"
        };
        return labels[key] || key;
      };

    return ( 
        <div className="min-h-screen bg-white pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
                        Assurance
                    </h1>
                </div>
        
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {/* Version mobile - Liste de cartes */}
                        <div className="md:hidden space-y-4">
                        {Object.entries(insuranceDetails).map(([key, value]) => (
                            <div key={key} className="bg-white rounded-lg shadow p-4">
                            <div className="text-sm font-medium text-gray-500 mb-1">
                                {getLabel(key)}
                            </div>
                            <div className="text-gray-900">
                                {value}
                            </div>
                            </div>
                        ))}
                        </div>
                        {/* Version desktop - Tableau */}    
                        <div className="hidden md:block bg-gray-50 shadow-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Information
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Détail
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-50 divide-y divide-gray-200">
                                {Object.entries(insuranceDetails).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {key === "company" && "Compagnie d'assurance"}
                                    {key === "contractNumber" && "Numéro de contrat"}
                                    {key === "type" && "Type d'assurance"}
                                    {key === "coverage" && "Montant de couverture"}
                                    {key === "startDate" && "Date de début"}
                                    {key === "activity" && "Activités couvertes"}
                                    {key === "lien" && "Télécharger notre attestation"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {value}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div>
                    <div className="bg-gray-50 shadow-lg p-6 mb-4">
                        <h2 className="text-lg font-semibold mb-4">Attestation QR Code</h2>
                        <div className="flex justify-center">
                        <img
                            src="\attestation_assurance.webp"
                            alt="QR Code Attestation"
                            className="w-48 h-48"
                        />
                        </div>
                        <p className="text-sm text-gray-500 text-center mt-4">
                        Scannez pour accéder à l'attestation
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}