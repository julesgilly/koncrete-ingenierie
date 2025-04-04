export default function Contact() {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 pt24">
        
        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-24">Contactez-nous</h1>
  
        {/* Coordonnées */}
        <div className="bg-white shadow-md p-6 w-full max-w-3xl text-center">
          <p className="text-gray-700 text-lg"><strong>📍 Adresse :</strong> 73, rue de Vaugirard, 75006 Paris</p>
          <p className="text-gray-700 text-lg"><strong>📞 Téléphone :</strong> +33 6 10 96 31 69</p>
          <p className="text-gray-700 text-lg"><strong>📧 Email :</strong> <a href="mailto:koncrete@koncrete-ing.fr" className="text-blue-600">koncrete@koncrete-ing.fr</a></p>
        </div>
  
        {/* Carte Google Maps */}
        <div className="mt-8 w-full max-w-3xl">
          <iframe
            title="Google Maps"
            className="w-full h-64 shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.614640849036!2d2.322756975960929!3d48.846488801544815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671cd8ac7f703%3A0xfdb62d6fa65f79e7!2s73%20Rue%20de%20Vaugirard%2C%2075006%20Paris!5e0!3m2!1sfr!2sfr!4v1738864951751!5m2!1sfr!2sfr"
            allowFullScreen
          ></iframe>
        </div>
  
      </div>
    );
  }