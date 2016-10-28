import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  rootUrl: 'http://tiny-za-server.herokuapp.com/collections/jeffsorderitems',
  defaults: {
    time: new Date(),
    order: []
  },
  updateOrder(newItem) {
    console.log('order', this.get('order').concat(newItem));
    this.set('order', this.get('order').concat(newItem));
  },
  addTotal() {
    subtotal += this.order.price;
  }
});
