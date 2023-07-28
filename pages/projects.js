import Link from "next/link";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { NOTION_DATABASE_ID, NOTION_TOKEN } from "../config";

export default function Projects({ projectData }) {
  return (
    <div>
      <h1 className="text-4xl font-bold sm:text-6xl">
        프로젝트 진행 :
        <span className="pl-4 text-blue-500">{projectData.results.length}</span>
      </h1>
      <div className="grid grid-cols-1 gap-8 p-12 m-4">
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
    </div>
  );
}

//  빌드시 호출
export const getStaticProps = async () => {
  //  Notion API (Query a database)
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
  };

  const reponse = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projectData = await reponse.json();

  return { props: { projectData }, revalidate: 60 };
};
