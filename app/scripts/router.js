import $ from 'jquery';
import Backbone from 'backbone';
import renderSingleItem from './views/menuItem';
import renderCourseList from './views/course';
import BeerItems from './collections/beerItems';
import BeerItem from './models/beerItem';
import EntreeItem from './models/entreeItem';
import EntreeItems from './collections/entrees';
import GameItem from './models/gameItem';
import Games from './collections/games';

let beerItems = new BeerItems();
let entreeItems = new EntreeItems();
let games = new Games();
let container = $('.menu-container');

const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
  },
  home() {
    beerItems.fetch();
    entreeItems.fetch();
    games.fetch();
    container.append(renderCourseList(beerItems));
    container.append(renderCourseList(entreeItems));
    container.append(renderCourseList(games));

    }
});

const router = new Router();

export default router;
