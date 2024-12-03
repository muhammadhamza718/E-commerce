export default function Features() {
    const features = [
      { title: 'Free Shipping', description: 'On all orders over $50.' },
      { title: '24/7 Support', description: 'We’re here to help anytime.' },
      { title: 'Secure Payments', description: '100% secure payment.' },
    ];
  
    return (
      <section id="features" className="py-16 poppins px-4 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 shadow-md rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  