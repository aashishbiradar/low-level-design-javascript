const Item = require('./Item');

class CartItem extends Item {
  constructor(item, quantity) {
    const { id, name, price } = item;
    super(id, name, price);
    this.quantity = quantity;
  }
  get totalPrice() {
    return this.price * this.quantity;
  }
}

const CartItemFactory =  {
  createItem(item, quantity) {
    return new CartItem(item, quantity);
  }
}
module.exports = CartItemFactory;