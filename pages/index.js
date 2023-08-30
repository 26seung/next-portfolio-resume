import Introduction from "/components/home/introduction";
import Animation from "/components/home/animation";
import Contact from "/components/contact/contact";
import Project from "/components/projects/project";
import { NOTION_DATABASE_ID, NOTION_TOKEN } from "/config";

export default function Home({ projectData }) {
  return (
    <>
      <div className="container mx-auto ">
        <Animation />
        <Introduction />
        <Project projectData={projectData} />
        <Contact />
      </div>
    </>
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

  return {
    props: { projectData },
    // ISR 설정 : 설정한 시간 값 마다 페이지를 새로 렌더링
    revalidate: 60 * 60 * 24,
  };
};
