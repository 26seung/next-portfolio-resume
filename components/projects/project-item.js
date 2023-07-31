import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.name.title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const type = data.properties.Type.multi_select[0].name;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const moreUrl = data.public_url;

  {
    // console.log("items : ", data);
  }
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 project-card">
              <Image
                className="object-cover object-center rounded rounded-xl"
                alt="hero"
                src={imgSrc}
                width={720}
                height={600}
                // layout="fixed"
                quality={100}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold font-mono text-gray-900 dark:text-amber-300">
                {title}
              </h1>
              <p className="mb-8 pl-2 leading-relaxed">{description}</p>
              {/* <div className="flex justify-center"> */}
              <div className="tags flex items-start mt-5">
                <h1 className="text-xs px-2 py-1 mr-2 rounded-md bg-pink-200 dark:bg-pink-600 w-30">
                  {type}
                </h1>
              </div>
              <div className="tags flex items-start mt-2">
                {tags.map((aTag) => (
                  <h1
                    className="text-xs px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                    key={aTag.id}
                  >
                    {aTag.name}
                  </h1>
                ))}
              </div>
              <div>
                <a
                  href={github}
                  target="blank"
                  className="text-xs pr-5 mt-3 text-indigo-900 inline-flex items-center"
                >
                  GitHub
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href={moreUrl}
                  target="blank"
                  className="text-xs pr-5 mt-3 text-indigo-900 inline-flex items-center"
                >
                  More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    // <div className="project-card">
    //   <section className="text-gray-600 body-font">
    //     <div className="container px-5 py-10 mx-auto">
    //       <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
    //         <div className="sm:w-32 sm:h-32 h-50 w-50 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
    //           <Image
    //             className="rounded-t-xl rounded-b-xl"
    //             src={imgSrc}
    //             alt="cover image"
    //             width={500}
    //             height={500}
    //             layout="responsive"
    //             objectFit="cover"
    //             quality={100}
    //           />
    //         </div>
    //         <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
    //           <h2 className="text-2xl text-gray-900 text-lg title-font font-medium mb-2">
    //             {title}
    //           </h2>
    //           <p className="leading-relaxed text-base">{description}</p>
    //           <div className="tags flex items-start mt-5">
    //             <h1 className="text-xs px-2 py-1 mr-2 rounded-md bg-pink-200 dark:bg-pink-600 w-30">
    //               {type}
    //             </h1>
    //           </div>
    //           <div className="tags flex items-start mt-2">
    //             {tags.map((aTag) => (
    //               <h1
    //                 className="text-xs px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
    //                 key={aTag.id}
    //               >
    //                 {aTag.name}
    //               </h1>
    //             ))}
    //           </div>
    //           <a
    //             href={github}
    //             target="blank"
    //             className="text-xs pr-5 mt-3 text-indigo-900 inline-flex items-center"
    //           >
    //             GitHub
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               className="w-4 h-4"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //           <a
    //             href={moreUrl}
    //             target="blank"
    //             className="text-xs pr-5 mt-3 text-indigo-900 inline-flex items-center"
    //           >
    //             More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               className="w-4 h-4 "
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
