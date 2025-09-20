import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <main className="flex justify-center items-center px-5 py-16">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fadeIn text-center">
        <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">
          About Our Garage Services
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 mb-6 text-center">
            We are a trusted automotive repair shop with over 15 years of
            experience providing quality service for all vehicle makes and
            models. Our certified technicians are committed to keeping your
            vehicle running safely and efficiently.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl text-blue-800 font-semibold mb-4 text-center">
            Contact Us
          </h2>
          <div className="space-y-4 mr-6 ">
            <div className=" flex items-center ">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <span className="text-gray-700 text-lg">
                elitehomeservices70@gmail.com
              </span>
            </div>

            <div className="flex items-center ">
              <div className="bg-green-600 p-2 rounded-full mr-4 divide-x-reverse">
                <i className="fas fa-phone text-green-100  text-2xl "></i>
              </div>
              <span className="text-gray-700 text-lg">(555) 123-4567</span>
            </div>
          </div>
        </div>
        <Link
          to="/services"
          className="inline-block px-5 py-3 bg-blue-500 border-2 border-blue-700  text-white font-semibold rounded-2xl shadow hover:bg-blue-800 transition-colors duration-100 "
        >
          Explore Our Services
        </Link>
      </div>
    </main>
  );
}
