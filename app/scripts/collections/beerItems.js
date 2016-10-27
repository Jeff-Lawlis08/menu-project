import Backbone from 'backbone';
import BeerItem from '../models/beerItem';

export default Backbone.Collection.extend({
  model: BeerItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',

  parse: function (response) {
    console.log('response', response.Beer);
return response.Beer;
}
  });
