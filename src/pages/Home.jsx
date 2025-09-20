import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="my-4 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-4 mx-4">
      <PageWrapper>
        <h2 className="text-5xl font-bold mb-4 text-blue-900 animate-fadeIn">
          Welcome to Elite Home Services
        </h2>
        <div className=" ">
          <p className="text-black text-lg font-semibold max-w-2xl mx-auto ">
            Elite Home Services is your trusted partner for expert home
            maintenance and repair solutions. Our team of skilled technicians
            provides top-notch services to ensure your home operates smoothly
            and safely. From door installation and maintenance to various home
            system repairs, we offer comprehensive solutions to meet your needs.
            With competitive pricing, flexible scheduling, and unparalleled
            customer support, we strive to exceed your expectations. Discover
            the Elite difference and contact us today to schedule an appointment
            or learn more about our services.
          </p>
        </div>
      </PageWrapper>
      <Hero />
    </div>
  );
}
