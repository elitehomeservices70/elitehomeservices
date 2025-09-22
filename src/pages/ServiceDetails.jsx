import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import serviceDetailsData from "../data/serviceDetailsData";

export default function ServiceDetails() {
  const { id } = useParams();
  const sections = serviceDetailsData[id] || [];

  return (
    <main className="content">
      <h2 className="text-4xl text-outline font-bold m-6 text-center uppercase">
        {id.replace(/_/g, " ")}
      </h2>

      <div className="flex flex-col mb-8 rounded-3xl">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          const hasImage = !!section.img;
          const hasText = section.title || section.description;

          // Case 2: Only image
          if (hasImage && !hasText) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full rounded-3xl overflow-hidden m-2 shadow-xl"
              >
                <img
                  src={section.img}
                  alt="Service"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            );
          }

          // Case 1: Only text
          if (hasText && !hasImage) {
            return (
              <div
                key={index}
                className={`w-full p-8 my-2 ${
                  isEven
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
                } shadow-xl overflow-hidden rounded-3xl`}
              >
                {section.title && (
                  <h3 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h3>
                )}
                {section.description && (
                  <p className="text-lg leading-relaxed">
                    {section.description}
                  </p>
                )}
              </div>
            );
          }

          // Case 3: Both text + image → alternate layout
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row p-2 my-2 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } ${
                isEven ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
              } shadow-xl overflow-hidden rounded-3xl`}
            >
              {/* Text */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center m-2">
                {section.title && (
                  <h3 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h3>
                )}
                {section.description && (
                  <p className="text-lg leading-relaxed">
                    {section.description}
                  </p>
                )}
              </div>

              {/* Image */}
              <motion.div
                initial={{ x: isEven ? 200 : -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:w-1/3 rounded-3xl overflow-hidden m-2 h-64 md:h-auto"
              >
                <img
                  src={section.img}
                  alt={section.title || "Service"}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
