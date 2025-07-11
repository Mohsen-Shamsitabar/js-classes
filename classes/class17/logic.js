import clamp from "./utility/clamp.js";

(() => {
  /**
   * @type {NodeListOf<HTMLDivElement>}
   */
  const progressBarContainers = document.querySelectorAll(".loading-container");

  //=== == == ===/

  /**
   * @param {number} value
   * @param {number} delta
   * @param {HTMLDivElement} progressBar
   */
  const updateProgressBar = (value, progressBar, maxValue) => {
    const progressPercentage = (clamp(0, maxValue, value) / maxValue) * 100;

    progressBar.style.width = `${progressPercentage}%`;
  };

  /**
   * @param {HTMLDivElement} progressBarContainer
   * @param {number} delta
   * @param {number} maxValue
   * @param {number} intervalDelay
   */
  const handleProgressBarContainer = (
    progressBarContainer,
    delta,
    maxValue,
    intervalDelay,
  ) => {
    const progressBar = progressBarContainer.querySelector(".loading-progress");
    const progressText = progressBarContainer.querySelector(".loading-text");

    let value = 0;

    const interval = setInterval(() => {
      value += delta;

      updateProgressBar(value, progressBar, maxValue);

      if (value >= maxValue) {
        clearInterval(interval);

        progressText.textContent = "Complete!";
      }
    }, intervalDelay);

    updateProgressBar(value, progressBar, maxValue);
  };

  let maxValue = 300;

  progressBarContainers.forEach(progressBarContainer => {
    handleProgressBarContainer(progressBarContainer, 50, maxValue, 500);
    maxValue += 100;
  });
})();
