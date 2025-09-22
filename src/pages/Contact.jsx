// src/pages/Contact.jsx (Vite)
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      alert("✅ Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-center py-16 mx-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl text-blue-900 font-bold mb-4 text-center">
          Contact Us
        </h2>
        <p className="m-6 text-center text-gray-700">
          We're here to help. Reach out to schedule a repair or request a free
          quote.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
