const AboutSection = () => {
    return (
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible services for every stage of your business
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Falcon Russia is a sister company of Falcon Aerospace Ltd company, Solar Power and Energy
                Company Pvt. Ltd, Mining, Hydro Power, Gas and Oil Managing Director, when Rajeev Nandi has been active in
                the formation of his first company, Falcon Aerospace Pvt. Ltd about all companies sold products in many
                countries throughout the world.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              {/* Placeholder image - replace with actual */}
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Falcon Russia Team" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;