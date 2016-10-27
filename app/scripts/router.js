import $ from 'jquery';
import Backbone from 'backbone';
import renderSingleItem from './views/menuItem';
import renderCourseList from './views/course';
import Items from './collections/items';

let items = new Items();
let container = $('.container');

const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
  },
  home() {
    container.empty();
  items.fetch({
    success: () => {
        renderCourseList(items);
        renderSingleItem(items);
      }
  });


  }

});

const router = new Router();

export default router;
