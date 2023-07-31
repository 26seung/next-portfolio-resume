const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // console.log("section : ", section);
    const yOffset = -50; // 선택적으로 상단 여백을 조정할 수 있습니다.
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const ActionService = {
  scrollTo,
};

export default ActionService;
