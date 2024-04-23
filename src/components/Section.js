export default class Section {
  constructor({items, renderer}, containerSelector) {

    // The items property should be an array of data, which you must add to the page when it loads.
      // The renderer property should be a function that creates and adds a single item to the page.

    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  // It has a public method named renderItems() that renders all elements on the page. 
    // It should iterate through the items array and call the renderer() function on each item. 
      // This method should be called once on page load.

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  // It has a public method named addItem() that takes a DOM element and adds it to the container. 
    // This method should be called when adding an individual card to the DOM.

  addItem() {
    this._container.prepend(element);
  }
    
}