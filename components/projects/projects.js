import Link from "next/link";
import ProjectItem from "./project-item";
import { NOTION_DATABASE_ID, NOTION_TOKEN } from "../../config";

export default function Projects({ projectData }) {
  return (
    <section id="section2" className="section">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 dark:text-indigo-500 tracking-widest font-medium title-font mb-1">
          PORTFOLIO WORK
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Current Number of Projects :
          <span className="pl-2 text-indigo-500 dark:text-amber-300">
            {projectData.results.length}
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1">
        {projectData.results.map((data) => (
          <ProjectItem key={data.id} data={data} />
        ))}
      </div>
      <div className="mx-5">
        <Link
          href="https://github.com/26seung"
          target="_blank"
          rel="noreferrer"
          className="bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>See more on Github</span>
        </Link>
      </div>
    </section>
  );
}
