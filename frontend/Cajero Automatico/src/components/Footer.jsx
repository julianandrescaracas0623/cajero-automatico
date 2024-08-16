const Footer = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src="../../public/img/logo-bancolombia.webp"
              className="h-20"
              alt="Bancolombia Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Bancolombia
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="https://flowbite.com/" className="hover:underline">
                © {añoActual} Bancolombia™
              </a>
              . All Rights Reserved.
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center"></span>
      </div>
    </footer>
  );
};

export default Footer;
