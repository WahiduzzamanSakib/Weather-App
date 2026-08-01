function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 py-6">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          🌤 Weather App
        </h3>
      </div>
      <div className="flex justify-between">
          <p className="text-sm text-gray-400">
            © 2026 Waheduzzaman. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with React, Tailwind CSS & Open-Meteo API
          </p>
        </div>
    </footer>
  );
}

export default Footer;