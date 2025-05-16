(() => {
  /**
   * @type {HTMLButtonElement}
   */
  const showBtn = document.querySelector("#show-btn");

  /**
   * @type {HTMLButtonElement}
   */
  const closeBtn = document.querySelector("#close-btn");

  /**
   * @type {HTMLDivElement}
   */
  const sidebar = document.querySelector(".sidebar");

  const handleBtn = () => {
    if (sidebar.classList.contains("visible")) {
      sidebar.classList.remove("visible");
      showBtn.textContent = "Show";
    } else {
      sidebar.classList.add("visible");
      showBtn.textContent = "Close";
    }
  };

  showBtn.onclick = handleBtn;
  closeBtn.onclick = handleBtn;
})();
