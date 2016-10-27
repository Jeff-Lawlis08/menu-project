import Backbone from 'backbone';
import EntreeItem from '../models/EntreeItem';

export default Backbone.Collection.extend({
  model: EntreeItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',

  parse: function (response) {
    console.log('response', response.entrees);
return response.entrees;
}
  });
