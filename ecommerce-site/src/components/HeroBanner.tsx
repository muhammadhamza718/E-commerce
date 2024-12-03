export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-gray-700 to-gray-900 text-white pt-20 pb-32"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12 gap-8">
        {/* left Side: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="poppins text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 text-shadow-lg leading-tight tracking-tight">
            Welcome to Our Exclusive Store
          </h1>
          <p className="poppins text-xl sm:text-2xl mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
            Discover unbeatable deals on top-rated products and exclusive offers
            you won’t find anywhere else. Shop now and start saving!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
            Shop Now
          </button>
        </div>
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/Store-Banner.png" // Replace with the actual image path
            alt="Exclusive Store Banner"
            className="max-w-full h-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
