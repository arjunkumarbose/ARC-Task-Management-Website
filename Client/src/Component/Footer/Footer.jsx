import logo from "../../assets/Arc.png";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
          <img className="w-auto h-12" src={logo} alt="" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/arjunkumarbose/"
            className="text-sm text-gray-600 transition-colors duration-300  hover:text-blue-500 "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/arjunkumarbose"
            className="text-sm text-gray-600 transition-colors duration-300  hover:text-blue-500 "
          >
            GitHub
          </a>

          <a
            href="/about"
            className="text-sm text-gray-600 transition-colors duration-300  hover:text-blue-500 "
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm text-gray-600 transition-colors duration-300  hover:text-blue-500 "
          >
            Contact
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
          © Copyright Arjun Kumar Bose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
