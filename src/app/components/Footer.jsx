import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#295c49] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaXTwitter />
          </a>
        </div>

        {/* Bottom */}
        <p className="text-xs text-gray-300">
          © 2026 KeenKeeper. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;