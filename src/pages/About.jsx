import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <main className="flex justify-center items-center px-5 py-16">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fadeIn text-center">
        <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">
          ABOUT US
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 mb-6 text-center">
            At Elite Home Services, we take immense pride in being a premier
            provider of home-based services throughout the USA, dedicated to
            transforming houses into well-maintained, comfortable, and inviting
            homes. With a rich history rooted in a passion for exceptional
            craftsmanship and customer satisfaction, our team of highly skilled
            professionals brings years of expertise to every project, ensuring
            that your home receives the care and attention it deserves. We
            understand that your home is more than just a place—it’s a sanctuary
            where memories are made, and we are committed to preserving its
            functionality and charm through our reliable and tailored solutions.
            At Elite Home Services, we prioritize trust, integrity, and quality
            in everything we do, striving to exceed expectations with our
            meticulous attention to detail and unwavering dedication to
            excellence. Our customer-first philosophy drives us to build lasting
            relationships with homeowners across the nation, offering
            personalized services that cater to the unique needs of each
            household. From coast to coast, we are proud to serve communities
            with dependable, high-quality home-based services that enhance the
            comfort and value of your living space. Choose Elite Home Services
            as your trusted partner for all your home care needs, and experience
            the peace of mind that comes with working with a team that values
            your home as much as you do. With our commitment to delivering
            outstanding results and a seamless service experience, Elite Home
            Services stands as a beacon of reliability and professionalism in
            the home services industry across the USA.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl text-blue-800 font-semibold mb-4 text-center">
            Contact Us
          </h2>
          <div className="space-y-4 mr-6">
            <div className="flex items-center">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <span className="text-gray-700 text-lg break-words overflow-hidden text-ellipsis">
                elitehomeservices70@gmail.com
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-green-600 p-2 rounded-full mr-4">
                <i className="fas fa-phone text-green-100 text-2xl"></i>
              </div>
              <span className="text-gray-700 text-lg">(555) 123-4567</span>
            </div>
          </div>
        </div>
        <Link
          to="/services"
          className="inline-block px-5 py-3 bg-blue-500 border-2 border-blue-700 text-white font-semibold rounded-2xl shadow hover:bg-blue-800 transition-colors duration-100"
        >
          Explore Our Services
        </Link>
      </div>
    </main>
  );
}
