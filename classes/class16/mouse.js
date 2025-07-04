(() => {
  /**
   * @type {HTMLDivElement}
   */
  const cursor = document.getElementById("cursor");

  //===//

  /**
   *
   * @param {MouseEvent} event
   */
  const handleCursor = event => {
    const { clientX, clientY } = event;

    cursor.style = `top:${clientY}px;left:${clientX}px;`;

    console.log(event);
  };

  // addEventListener("mousemove", handleCursor);
  window.onmousemove = handleCursor;
})();
