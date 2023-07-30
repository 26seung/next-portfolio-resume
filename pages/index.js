import Head from "next/head";
import Layout from "../components/layout";
import Introduction from "../components/home/introduction";
import Animation from "../components/home/animation";
import { useEffect } from "react";
import Contact from "../components/contact/contact";
import Projects from "../components/projects/projects";
import { NOTION_DATABASE_ID, NOTION_TOKEN } from "../config";

export default function Home({ projectData }) {
  return (
    <>
      <div className="container mx-auto ">
        <Animation />
        <Introduction />
        <Projects projectData={projectData} />
        <Contact />
      </div>
    </>
  );
}

//  빌드시 호출
export async function getStaticProps() {
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
}
