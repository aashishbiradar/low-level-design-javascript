const Item = require('./Item');

class Store {
  constructor() {
    this.items = [];
    this.addItems();
  }
  addItems() {
    const dummyItems = [{
      id: 1,
      name: 'Apple',
      price: 10,
    }, {
      id: 2,
      name: 'Banana',
      price: 5,
    }, {
      id: 3,
      name: 'Orange',
      price: 7
    }];
    for (const item of dummyItems) {
      const { id, name, price } = item;
      const newItem = new Item(id, name, price);
      this.items.push(newItem);
    }
  }
  getItemDetails(name) {
    let queryItem = null;
    for (const item of this.items) {
      if (item.name === name) {
        queryItem = item;
        break;
      }
    }
    return queryItem;
  }
}

module.exports = Store;