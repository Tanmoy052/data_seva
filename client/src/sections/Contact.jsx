import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // First, send to Web3Forms (fast, reliable!)
      const web3FormsData = {
        ...formData,
        access_key: "598247ef-2eb1-4569-b80c-747581db1676",
        subject: "New Contact Form Submission from Data Seva",
        from_name: "DATASEVA",
      };

      await axios.post("https://api.web3forms.com/submit", web3FormsData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Show success immediately after Web3Forms completes!
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Then, save to MongoDB in the background (non-blocking!)
      const API_URL =
        import.meta.env.VITE_API_URL || "https://data-seva.onrender.com";
      try {
        await axios.post(`${API_URL}/api/contact`, formData);
      } catch (bgErr) {
        console.error("Background save to DB failed:", bgErr);
        // Don't show error to user - email already sent successfully!
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMsg(
        err.response?.data?.message ||
          "Connection failed. Please try again later.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready To Start Your <br />
              <span className="text-gradient">Next Big Project?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-md leading-relaxed">
              We're currently accepting new projects and partnerships. Reach out
              and let's discuss how we can help your business grow.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email Us",
                  value: "tanmoypal30102004@gmail.com",
                  color: "text-blue-500",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: "Visit Us",
                  value: "Kolkata, India",
                  color: "text-cyan-400",
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  label: "Call Us",
                  value: "+91 7439749300",
                  color: "text-indigo-400",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-base md:text-lg font-bold text-white break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/tanmoy-pal-755611294",
                },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-10 lg:p-12 relative border border-white/10"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-sm">
                  Thank you for reaching out. Our strategy team will review your
                  inquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-xl shadow-blue-600/20"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 text-sm"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-600 text-sm"
                    placeholder="Hi there! Let's talk about..."
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-red-400 bg-red-400/10 p-3 rounded-xl border border-red-400/20"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <p className="text-xs font-medium">{errorMsg}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 active:shadow-none group text-sm"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
