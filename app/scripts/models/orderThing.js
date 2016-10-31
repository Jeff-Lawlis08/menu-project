import Backbone from 'backbone';

export default Backbone.Model.extend({
    idAttribute: '_id',
    rootUrl: 'http://tiny-za-server.herokuapp.com/collections/jeffsorderitems',
    defaults: {
        time: new Date(),
        order: [],
        prices: [],
        total: 0,
        tax: 0
    },
    updateOrder(newItem) {

        this.set('order', this.get('order').concat(newItem));
    },
    addPrice(newItem) {
        let itemPrices = this.get('prices');
        let newPrices = itemPrices.concat(newItem);
        this.set({
            prices: newPrices
        });
    },
    getTotal(newItem) {
        let runningTotal = this.get('total');
        let runningTax = this.get('tax');
        let addedItem = runningTotal + newItem + runningTax;
        this.set({
            total: Math.round(addedItem * 100) / 100
        });
    },
    getTax(newItem) {
        let currentTax = this.get('tax');
        let addTax = currentTax + newItem * 0.08;
        this.set({
            tax: Math.round(addTax * 100) / 100
        });
    }

});
