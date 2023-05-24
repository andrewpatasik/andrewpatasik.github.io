import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-12 pb-4">
        <a href="#" className="flex items-center">
          <h1
            style={{ fontFamily: "heebo, sans-serif" }}
            className="text-2xl tracking-tighter"
          >
            Andrew Patasik.
          </h1>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-blue-500 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-400 md:p-0"
                aria-current="page"
              >
                <p className="flex items-center">
                  Projects
                  <ArrowLongRightIcon className="ml-1 w-4 h-4" />
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0"
              >
                <p className="flex items-center">
                  Contact
                  <ArrowLongRightIcon className="ml-1 w-4 h-4" />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
