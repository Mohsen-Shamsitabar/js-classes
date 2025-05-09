// USE MOMENT JS FOR BETTER EXAMPLES: https://momentjs.com/

(() => {
  const [dayCounter, hourCounter, minCounter, secCounter] =
    document.querySelectorAll(".box>h4");

  const finishTime = new Date(Date.now() + 300000000);

  // const render = () => {
  //   const now = new Date(Date.now());

  //   const deltaTime = new Date(finishTime.getTime() - now.getTime());

  //   dayCounter.textContent = deltaTime.getDay();
  //   hourCounter.textContent = deltaTime.getHours();
  //   minCounter.textContent = deltaTime.getMinutes();
  //   secCounter.textContent = deltaTime.getSeconds();
  // };

  const render = () => {
    const now = new Date();
    let deltaMs = finishTime - now;

    if (deltaMs < 0) deltaMs = 0; // Timer stops at 0

    const seconds = Math.floor((deltaMs / 1000) % 60);
    const minutes = Math.floor((deltaMs / 1000 / 60) % 60);
    const hours = Math.floor((deltaMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(deltaMs / (1000 * 60 * 60 * 24));

    dayCounter.textContent = days;
    hourCounter.textContent = hours;
    minCounter.textContent = minutes;
    secCounter.textContent = seconds;
  };

  render();

  setInterval(render, 1000);
})();
