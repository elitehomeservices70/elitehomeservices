import { Link } from "react-router-dom";
import serviceListData from "../data/serviceListData";

export default function Services() {
  return (
    <main className="content p-10 animate-fadeIn">
      <h2 className=" text-outline text-4xl font-bold mb-10 text-center ">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceListData.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <Link
                to={`/services/${service.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
