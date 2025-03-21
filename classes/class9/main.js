import AmirSection from "./amir-workspace/AmirSection.js";
import MahdiSection from "./mahdi-workspace/MahdiSection.js";

(() => {
  const body = document.querySelector("body");
  if (!body) return;

  body.innerHTML = `
    ${AmirSection()}

    <hr />

    ${MahdiSection()}
  `;
})();
