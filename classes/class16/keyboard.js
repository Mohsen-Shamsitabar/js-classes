(() => {
  /**
   * @type {HTMLDivElement}
   */
  const container = document.getElementById("text-container");

  /**
   * @type {HTMLInputElement}
   */
  const input = document.getElementById("input");

  /**
   * @type {HTMLButtonElement}
   */
  const submitBtn = document.getElementById("submit-btn");

  /**
   * @type {HTMLButtonElement}
   */
  const resetBtn = document.getElementById("reset-btn");

  //=== == == ===/

  /**
   * @param {MouseEvent} event
   */
  const addText = event => {
    event.preventDefault();

    const textValue = input.value;

    const textElement = document.createElement("p");
    textElement.classList.add("text");
    textElement.textContent = textValue;

    container.appendChild(textElement);

    container.scroll({ behavior: "smooth", top: 9999999 });

    input.value = "";
  };

  const resetAll = () => {
    container.innerHTML = "";
  };

  submitBtn.onclick = addText;
  resetBtn.onclick = resetAll;
})();
