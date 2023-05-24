const Footer = () => {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Andrew Patasik
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center space-x-4 md:space-x-6 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
