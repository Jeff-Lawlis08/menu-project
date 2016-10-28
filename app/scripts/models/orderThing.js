import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  rootUrl: 'http://tiny-za-server.herokuapp.com/collections/jeffsorderitems'
});
