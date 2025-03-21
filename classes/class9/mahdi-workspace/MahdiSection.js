import onMount from "../../../utilities/on-mount.js";

const MahdiSection = () => {
  const sectionId = "section--mahdi";
  const spanTextId = "color-code";

  onMount(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    /**
     * @type {HTMLElement}
     */
    const spanText = section.querySelector(`#${spanTextId}`);

    const btn = section.querySelector("button");
    if (!btn) return;

    const handleClick = () => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

      const colorCode = `rgb(${red}, ${green}, ${blue})`;
      spanText.textContent = colorCode;

      section.style.backgroundColor = colorCode;
    };

    btn.onclick = handleClick;
  });

  return `
    <section id=${sectionId}>
      <div>
        <span>background-color: </span>
        <span id=${spanTextId}>rgb(0,0,0)</span>
      </div>

      <button>Click me</button>
    </section>
  `;
};

export default MahdiSection;
