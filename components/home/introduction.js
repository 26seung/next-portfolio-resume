import Link from "next/link";

export default function Introduction() {
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
            <p className="mb-8 leading-relaxed">
              &nbsp; ✏️ &nbsp; 저는 개발에 대한 열정을 가지고 있으며, 새로운
              기술을 공부하고 더 나은 코드를 작성하기 위해 노력하고 있습니다.
              {/* <br className="hidden lg:inline-block" />
              💛 협업에 적극적인 개발자 의견을 공유하며 해결하는 과정에서 성과를
              이룰 수 있다고 생각합니다.
              <br className="hidden lg:inline-block" />
              💖 사용자 입장에서 생각하는 개발자 불편함과 요구사항을 개선하는
              과정에서 더욱 성장한다고 생각합니다. */}
            </p>
            {/* <div className="flex justify-center">
              <Link href="/projects" className="btn-project">
                더 보기...
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
