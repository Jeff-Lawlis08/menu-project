import Backbone from 'backbone';
import GameItem from '../models/gameItem';

export default Backbone.Collection.extend({
  model: GameItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',

  parse: function (response) {
    console.log('response', response.games);
return response.games;
}
  });
