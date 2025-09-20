export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="transition-transform hover:scale-105 inline-block">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">
            Elite Home Services
          </span>{" "}
          — All Rights Reserved
        </p>
        <p>Mail:ahmed@gmail.com</p>
      </div>
    </footer>
  );
}
