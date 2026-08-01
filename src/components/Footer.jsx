import { motion } from "framer-motion";
import {
  FaCloudSun,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 border-t border-white/20 bg-white/60 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-5 text-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 p-3 text-white shadow-lg">
              <FaCloudSun className="text-2xl" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
                Weather App
              </h3>

              <p className="text-sm text-gray-500">
                Accurate forecasts, anytime 🌤️
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/WahiduzzamanSakib"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gray-100 p-3 text-gray-700 transition hover:bg-gray-900 hover:text-white"
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              href="www.linkedin.com/in/waheduzzaman-md"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:waheduzzaman@gmail.com"
              className="rounded-full bg-red-100 p-3 text-red-500 transition hover:bg-green-500 hover:text-white"
            >
              <FaEnvelope size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-5 text-sm text-gray-500">
            <p className="flex flex-wrap items-center justify-center gap-1">
              © 2026 <span className="font-semibold">Waheduzzaman</span>.
              Made with
              <FaHeart className="mx-1 text-red-500" />
              using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;