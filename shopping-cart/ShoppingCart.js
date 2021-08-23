const CartItemFactory = require('./CartItemFactory');

class ShoppingCart {
  items = []
  addItem(item, quantity) {
    const cartItem = CartItemFactory.createItem(item, quantity);
    this.items.push(cartItem);
  }
  getTotalPrice() {
    return this.items.reduce((sum, i) => sum + i.totalPrice, 0);
  }
  removeItem(item) {
    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i].id === item.id) {
        const item = this.items.splice(i, 1);
        return item;
      }
    }
  }
}

module.exports = ShoppingCart;