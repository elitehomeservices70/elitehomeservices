export default function Contact() {
  return (
    <main className="flex justify-center items-center py-16 mx-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fadeIn ">
        <h2 className="text-3xl text-blue-900 font-bold mb-4 text-center">
          Contact Us
        </h2>
        <p className="m-6 text-center text-gray-700">
          We're here to help. Reach out to schedule a repair or request a free
          quote.
        </p>
        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
