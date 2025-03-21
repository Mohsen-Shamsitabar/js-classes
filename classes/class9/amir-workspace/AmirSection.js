import onMount from "../../../utilities/on-mount.js";

const AmirSection = () => {
  const sectionId = "section--amir";

  onMount(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // console.log({ section });
  });

  return `
    <section id=${sectionId}></section>
  `;
};

export default AmirSection;
