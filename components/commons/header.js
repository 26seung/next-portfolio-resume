import Link from "next/link";
import DarkModeToggleButton from "/components/commons/darkModeToggleButton";
import ActionService from "/service/actionService";

export default function Header() {
  const scrollToSection = (sectionId) => {
    ActionService.scrollTo(sectionId);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="-2 -2 28 28"
            >
              <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
            <span className="ml-3 text-xl">Portfolio</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
            <a
              onClick={() => scrollToSection("section1")}
              className="custom-link mr-7 hover:text-gray-900 hover:font-bold hover:underline"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("section2")}
              className="custom-link mr-7 hover:text-gray-900 hover:font-bold hover:underline "
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("section3")}
              className="custom-link mr-7 hover:text-gray-900 hover:font-bold hover:underline"
            >
              Contact
            </a>
            <Link
              href="https://ebony-statistic-df3.notion.site/Junior-Backend-LeeYuSeung-343f30692dc542ad82a103fffe42cb81?pvs=4"
              target="blank"
              className="custom-link mr-7 hover:text-gray-900 hover:font-bold hover:underline"
            >
              Resume
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </div>
  );
}
