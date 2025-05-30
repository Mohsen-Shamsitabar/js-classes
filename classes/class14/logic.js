(() => {
  // /**
  //  * @type {HTMLDivElement}
  //  */
  // const cursor = document.querySelector("#cursor");

  /**
   * @type {HTMLDivElement}
   */
  const container = document.getElementById("container");

  /**
   * @type {[HTMLButtonElement,HTMLButtonElement]}
   */
  const [prevBtn, nextBtn] = document.querySelectorAll(".btn");

  /**
   * @type {HTMLDivElement}
   */
  const slider = document.getElementById("slider");

  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;

  // === === ===

  const generateColor = () => {
    const rngR = Math.random() * 255;
    const rngG = Math.random() * 255;
    const rngB = Math.random() * 255;

    return `rgb(${rngR}, ${rngG}, ${rngB})`;
  };

  const data = [1, 2, 3, 4];
  let currentIdx = 0;

  data.forEach(val => {
    const item = document.createElement("div");
    item.classList.add("item-container");
    item.textContent = val;
    item.style.backgroundColor = generateColor();

    slider.appendChild(item);
  });

  // === === ===

  const handleBtnDisability = () => {
    if (currentIdx >= data.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    if (currentIdx <= 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  };

  const handleNextBtn = () => {
    currentIdx++;
    slider.style.transform = `translateX(-${containerWidth * currentIdx}px)`;

    handleBtnDisability();
  };

  const handlePrevBtn = () => {
    currentIdx--;
    slider.style.transform = `translateX(-${containerWidth * currentIdx}px)`;

    handleBtnDisability();
  };

  handleBtnDisability();

  nextBtn.onclick = handleNextBtn;
  prevBtn.onclick = handlePrevBtn;

  // window.addEventListener("mousemove", e => {
  //   const [x, y] = [e.clientX, e.clientY];

  //   cursor.style.top = `${y}px`;
  //   cursor.style.left = `${x}px`;
  // });
})();
