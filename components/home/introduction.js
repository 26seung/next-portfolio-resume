import ActionService from "/service/actionService";

export default function Introduction() {
  const scrollToSection = (sectionId) => {
    ActionService.scrollTo(sectionId);
  };

  return (
    <>
      <section id="section1" className="flex flex-col text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-5xl mb-10 font-medium text-gray-700">
              안녕하세요.
              <br className="hidden lg:inline-block" />
              개발자 <span className="text-6xl font-bold">이유승 </span>입니다.
            </h1>
            <p className="mb-8 ml-2 leading-relaxed">
              풀 스택 개발자로 성장하기 위해서 Spring Boot, Next 등의 여러
              기술들과 MSA 아키텍처 방식에도 관심을 가지고 학습하고 있습니다.
              <br className="hidden lg:inline-block" />
              클라우드 환경에 대한 학습을 위하여 AWS 클라우드의 자격증 중 하나인
              Solutions Architect-Associate (SAA) 자격증을 취득하였습니다.
              <br className="hidden lg:inline-block" />
              이러한 노력들은 개발자로서 능력을 키우기 위한 것이며, 앞으로도
              꾸준한 학습을 통해 기초를 다듬고 새로운 기술을 습득하여 부끄럽지
              않은 전문가로 성장하겠습니다.
              <br className="hidden lg:inline-block" />
              저는 끊임없는 도전과 성장에 적극적이며, 새로운 도전을 통해 더 큰
              성과를 이뤄내고 싶습니다.
              {/* &nbsp; ✏️ &nbsp; 저는 개발에 대한 열정을 가지고 있으며, 새로운
              기술을 공부하고 더 나은 코드를 작성하기 위해 노력하고 있습니다. */}
              {/* <br className="hidden lg:inline-block" />
              💛 협업에 적극적인 개발자 의견을 공유하며 해결하는 과정에서 성과를
              이룰 수 있다고 생각합니다.
              <br className="hidden lg:inline-block" />
              💖 사용자 입장에서 생각하는 개발자 불편함과 요구사항을 개선하는
              과정에서 더욱 성장한다고 생각합니다. */}
            </p>
            <div className="flex justify-center">
              <a
                onClick={() => scrollToSection("section2")}
                className="btn-project"
              >
                더 보기 ...
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
