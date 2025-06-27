(() => {
  /**
   * @type {HTMLDivElement}
   */
  const boxContainer = document.getElementsByTagName("section")[0];

  /**
   * @type {HTMLTemplateElement}
   */
  const boxTemplate = document.querySelector("#box-template");

  //=== == == == ===//

  let boxCount = 0;
  let batchCount = 1;

  const boxRenderCount = 6;

  const renderBatch = () => {
    while (boxCount <= boxRenderCount * batchCount) {
      const box = createBox(boxCount === boxRenderCount * batchCount);

      boxContainer.appendChild(box);
    }
  };

  const boxObserver = new IntersectionObserver(
    (entries, observer) => {
      const entry = entries[0];
      const box = entry.target;

      if (!entry.isIntersecting) return;

      box.classList.remove("box--observer");
      observer.disconnect();
      batchCount++;

      renderBatch();
    },
    {
      threshold: 1,
    },
  );

  /**
   * @param {boolean} hasObserver
   */
  const createBox = hasObserver => {
    /**
     * @type {HTMLDivElement}
     */
    const boxClone = boxTemplate.content.cloneNode(true);
    const box = boxClone.querySelector(".box");

    box.textContent = boxCount;
    boxCount++;

    if (hasObserver) {
      boxObserver.observe(box);
      box.classList.add("box--observer");
    }

    return box;
  };

  renderBatch();
})();
