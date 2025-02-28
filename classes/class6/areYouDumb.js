(() => {
  const title = document.getElementById("title");
  if (!title) return;

  /**
   * @type {HTMLButtonElement}
   */
  const yesBtn = document.querySelector("#btn--yes");

  /**
   * @type {HTMLButtonElement}
   */
  const noBtn = document.getElementById("btn--no");

  // ===

  /**
   * @param {MouseEvent} event
   */
  const handleYesClick = event => {
    title.innerHTML = "I knew it xD";
  };

  yesBtn.onclick = handleYesClick;

  // ===

  const handleNoClick = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
  };

  noBtn.onclick = handleNoClick;
})();
