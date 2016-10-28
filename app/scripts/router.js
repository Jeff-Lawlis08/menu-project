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
import OrderThing from './models/orderThing';
import OrderStuff from './collections/orderStuff';
import renderOrder from './views/order.js';
import renderSingleOrderItem from './views/orderItem.js';

let orderItems = new OrderStuff();
let beerItems = new BeerItems();
let entreeItems = new EntreeItems();
let games = new Games();
let container = $('.menu-container');
let beerContainer = $('.beers');
let entreeContainer = $('.entrees');
let gameContainer = $('.games');
let orderContainer = $('.order-container');

const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
  },
  home() {
    beerItems.fetch();
    entreeItems.fetch();
    games.fetch();
    beerContainer.append(renderCourseList(beerItems, orderItems));
    entreeContainer.append(renderCourseList(entreeItems, orderItems));
    gameContainer.append(renderCourseList(games, orderItems));
    //order stuff
    orderItems.fetch();
    orderContainer.append(renderOrder(orderItems));
    }

});

const router = new Router();

export default router;
