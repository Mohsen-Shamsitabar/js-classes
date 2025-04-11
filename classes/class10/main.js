import { Item } from "./classes.js";

(() => {
  /**
   * @type {Item[]}
   */
  const items = [
    {
      title: "History",
      text: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
    },
    {
      title: "Vision",
      text: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
    },
    {
      title: "Goals",
      text: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
    },
  ];

  /**
   * @type {HTMLDivElement}
   */
  const btnsContainer = document.getElementById("btns-container");

  /**
   * @type {HTMLDivElement}
   */
  const head = document.getElementById("head");

  /**
   * @type {HTMLDivElement}
   */
  const text = document.getElementById("text");

  // === === === === === === //

  /**
   * @type {HTMLButtonElement | null}
   */
  let lastActiveBtn = null;

  /**
   * @param {Item} item
   */
  const updateContent = item => {
    head.textContent = item.title;

    text.textContent = item.text;
  };

  /**
   * @param {MouseEvent} event
   */
  const handleBtnClick = event => {
    /**
     * @type {HTMLButtonElement}
     */
    const btn = event.target;

    const idx = btn.getAttribute("data-idx");
    if (!idx) return;

    /**
     * @type {Item}
     */
    const item = items[idx];

    updateContent(item);

    if (!lastActiveBtn) {
      btn.classList.add("active");
      lastActiveBtn = btn;
    } else {
      const lastActiveIdx = lastActiveBtn.getAttribute("data-idx");
      if (!lastActiveIdx) return;
      if (lastActiveIdx === idx) return;

      lastActiveBtn.classList.remove("active");
      btn.classList.add("active");
      lastActiveBtn = btn;
    }
  };

  items.forEach((item, idx) => {
    const btn = document.createElement("button");

    btn.textContent = item.title;
    btn.className = "tab-btn";
    btn.setAttribute("data-idx", `${idx}`);
    btn.addEventListener("click", handleBtnClick);

    btnsContainer.appendChild(btn);
  });
})();
