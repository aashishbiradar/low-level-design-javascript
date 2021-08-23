const ShoppingCart = require('./ShoppingCart');
const Store = require('./Store');

class App {
  constructor () {
    this.displayMessage('Shopping Cart App started');
    this.store = new Store();
    this.cart = new ShoppingCart();
  }
  displayMessage(message) {
    console.log(message);
  }
  addItem(itemName, quantity) {
    const item = this.store.getItemDetails(itemName);
    this.cart.addItem(item, quantity);
    this.displayMessage(`Item Added: ${itemName}(${quantity})`);
  }
  removeItem(itemName) {
    const item = this.store.getItemDetails(itemName);
    this.cart.removeItem(item);
    this.displayMessage(`Item Removed: ${itemName}`);
  }
  getCartTotalPrice() {
    const totalPrice = this.cart.getTotalPrice();
    this.displayMessage(`Cart Total Price: ${totalPrice}`);
  }
}

const app = new App();

app.addItem('Apple', 50);
app.getCartTotalPrice();

app.addItem('Banana', 10);
app.getCartTotalPrice();


app.removeItem('Apple');
app.getCartTotalPrice();