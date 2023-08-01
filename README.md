# Next.js Portfolio

관련 페이지 이동

- [install setting](/md/env.md)

---

### 개요

NextJs를 사용하여 개발한 Pre-rendering 방식의 나만의 포트폴리오 웹사이트 입니다.  
Notion API 를 호출하여 포트폴리오에 관련된 데이터를 가져와 정적페이지로 제공해줍니다.  
페이지 방문을 원하시면 여기로 (https://next-portfolio-resume.vercel.app/) 이동 하세요.

---

Static Generation 방식을 이용하여 빌드시점에 pre-rendering 하여 정적페이지 사용

- getStaticProps 사용 :
  - 서버에서 미리 실행되며 클라이언트에서는 실행되지 않는다,
  - 페이지 렌더링에 필요한 데이터는 사용자 request 전에 빌드 시점에 HTML 파일 생성,
  - 페이지에서만 사용가능하다. (app, document, error 파일)에선 사용이 불가능.
    - React는 페이지가 렌더링되기 전에 필요한 모든 데이터를 가지고 있어야 하기 때문이다.
  - revalidate 옵션을 통해 페이지 재생성 시간 설정 가능

```js
export const getStaticProps = async () => {
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
    // 페이지 재생성 빌드 초시간 설정,,
    revalidate: 600,
  };
};
```
