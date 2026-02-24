const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
          {/* Logo */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold">Shortly</h2>
          </div>

          {/* Links Section 1 */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">
                Link Shortening
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Branded Links
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">Analytics</li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
              <li className="hover:text-cyan-400 cursor-pointer">Developers</li>
              <li className="hover:text-cyan-400 cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Links Section 3 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">About</li>
              <li className="hover:text-cyan-400 cursor-pointer">Our Team</li>
              <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end justify-center items-start space-x-4">
            <img
              src="/assets/icon-facebook.svg"
              alt="facebook"
              className="cursor-pointer hover:opacity-70"
            />
            <img
              src="/assets/icon-twitter.svg"
              alt="twitter"
              className="cursor-pointer hover:opacity-70"
            />
            <img
              src="/assets/icon-pinterest.svg"
              alt="pinterest"
              className="cursor-pointer hover:opacity-70"
            />
            <img
              src="/assets/icon-instagram.svg"
              alt="instagram"
              className="cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
