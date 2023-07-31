import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
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
            <p className="text-sm text-gray-500 pl-10 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Euseung
              <br className="hidden lg:inline-block l-20" />
              &emsp;&emsp;&emsp;&emsp; [Junior Developer]
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
