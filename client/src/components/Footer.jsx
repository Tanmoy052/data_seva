import React from "react";
import { Twitter, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/dataseva.jpeg"
                alt="dataseva logo"
                className="h-10 w-10 rounded-xl object-cover"
              />
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                dataseva
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A senior-led digital agency specializing in high-performance web
              ecosystems and strategic startup growth.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/tanmoy-pal-755611294",
                },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:tanmoypal30102004@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "Data Engineering",
                "Data Analytics",
                "AI & Machine Learning",
                "Cloud Solutions",
                "Data Governance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                  >
                    {item}{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "About Our Story",
                "Selected Portfolio",
                "Success Stories",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                  >
                    {item}{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm font-medium">
          <p>
            © {currentYear} DATASEVA STRATEGIC DIGITAL AGENCY. ALL RIGHTS
            RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Systems Operational
            </span>
            <a href="#" className="hover:text-white transition-colors">
              BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
