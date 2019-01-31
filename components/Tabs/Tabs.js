class Tabs {
  constructor(element) {
    this.element = element;
    this.tabLink = document.querySelector(`.tabs-link[data-tab='${element.dataset.tab}']`);
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${element.dataset.tab}']`);
    element.addEventListener('click', () => this.select());
  }
  
  select() {
    this.deselect();
    this.element.classList.add('tabs-link-selected');
    this.itemElement.classList.add('tabs-item-selected');
    }

  deselect() {
    let items = document.querySelectorAll('.tabs-item');
    let tabLinks = document.querySelectorAll('.tabs-link');
    items.forEach(el => el.classList.remove('tabs-item-selected'));
    tabLinks.forEach(el => el.classList.remove('tabs-link-selected'));
    }
}

let tabLinks = document.querySelectorAll('.tabs-link');
tabLinks.forEach(el => new Tabs(el));