const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Sudut Pinrang
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <hr className="mt-2 mb-6 border-gray-200 sm:mx-auto" />
        <span className="block text-sm text-gray-500 sm:text-center">
          Made with ❤️ by andrewpatasik
        </span>
      </div>
    </footer>
  );
};

export default Footer;
