import Backbone from 'backbone';
import OrderThing from '../models/orderThing';

export default Backbone.Collection.extend({
  model: OrderThing,
  url: 'http://tiny-za-server.herokuapp.com/collections/jeffsorderitems',
});
