import Card from "./card.js";

(() => {
  const articleContainer = document.getElementById("article-container");
  if (!articleContainer) return;

  /**
   * @type {HTMLTemplateElement}
   */
  const template = document.getElementById("article-template");

  /**
   * @type {Card[]}
   */
  const data = [
    {
      title: "Do you accept all major credit cards?",
      content: "MEOW MEOW NIGGA, this is the first card.",
    },
    {
      title: "Do you suppport local farmers?",
      content: "ALAHO AKBAR, this is the second card.",
    },
    {
      title: "Do you use organic ingredients?",
      content: "FUCK THIS SHITTTET, this is the third card.",
    },
  ];

  data.forEach(card => {
    /**
     * @type {HTMLDivElement}
     */
    const article = template.content.cloneNode(true);

    /**
     * @type {HTMLDivElement}
     */
    const articleTitle = article.querySelector(".article-title");

    /**
     * @type {HTMLDivElement}
     */
    const articleText = article.querySelector(".article-text");

    /**
     * @type {HTMLButtonElement}
     */
    const btn = article.querySelector(".btn");

    articleTitle.textContent = card.title;
    articleText.textContent = card.content;

    // === === ===

    /**
     * @type {HTMLDivElement}
     */
    const articleContent = article.querySelector(".article-content");

    const handleBtnClick = () => {
      if (articleContent.classList.contains("hidden")) {
        articleContent.classList.remove("hidden");
      } else {
        articleContent.classList.add("hidden");
      }

      if (btn.className === "btn") {
        btn.className = "btn--active";
      } else {
        btn.className = "btn";
      }
    };

    btn.onclick = handleBtnClick;

    articleContainer.appendChild(article);
  });
})();
