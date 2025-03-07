class CoffeeItem {
  /**
   * @type {number}
   */
  id;

  /**
   * @type {string}
   */
  title;

  /**
   * @type {string}
   */
  description;

  /**
   * @type {string}
   */
  image;

  /**
   * @type {string[]}
   */
  ingredients;
}

(async () => {
  const response = await fetch("https://api.sampleapis.com/coffee/hot");

  /**
   * @type {CoffeeItem[]}
   */
  const data = await response.json();

  // === === ===

  /**
   * @type {HTMLTemplateElement}
   */
  const template = document.getElementById("item-template");

  /**
   * @type {HTMLDivElement}
   */
  const itemsContainer = document.getElementById("items-container");

  data.forEach(item => {
    /**
     * @type {HTMLDivElement}
     */
    const article = template.content.cloneNode(true);

    // ===

    /**
     * @type {HTMLImageElement}
     */
    const imageElement = article.querySelector("#image");

    imageElement.src = item.image;
    imageElement.alt = item.id;

    // === === ===

    const title = article.querySelector("#title");

    title.textContent = item.title;

    // ===

    const ingredients = article.querySelector("#ingredients");

    ingredients.textContent = item.ingredients.join(", ");

    // ===

    const description = article.querySelector("#description");

    description.textContent = item.description;

    itemsContainer.appendChild(article);
  });
})();
