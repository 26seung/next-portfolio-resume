import Head from "next/head";
import Layout from "../components/layout";
import Introduction from "../components/home/introduction";
import Animation from "../components/home/animation";
import { useEffect } from "react";
import Contact from "../components/contact/contact";

export default function Home() {
  // function test() {
  //   const horizontalUnderLine = document.getElementById("horizontal-underline");
  //   const horizontalMenus = document.querySelectorAll(".menue");
  //   console.log("horizontalUnderLine", horizontalMenus);

  //   function horizontalIndicator(e) {
  //     horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  //     horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  //     horizontalUnderLine.style.top =
  //       e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
  //   }
  //   horizontalMenus.forEach((menu) =>
  //     menu.addEventListener("cursor", (e) => horizontalIndicator(e))
  //   );
  // }
  // useEffect(() => {
  //   test();
  // }, []);

  // const section = document.querySelectorAll("section");
  // const contents = document.querySelectorAll(".content");

  // const firstTop = contents[0].offsetTop;
  // const secondTop = contents[1].offsetTop;

  // section[0].onclick = function () {
  //   window.scroll({ top: firstTop, behavior: "smooth" });
  // };
  // section[1].onclick = function () {
  //   window.scroll({ top: secondTop, behavior: "smooth" });
  // };

  // {
  //   console.log("aaaaa : ", section);
  // }

  return (
    <>
      <div className="container mx-auto">
        <Animation />
        <Introduction />
        <Contact />
      </div>
    </>
  );
}
