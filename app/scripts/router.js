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
import OrderItem from './models/orderThing';
import OrderItems from './collections/orderStuff';
import renderOrder from './views/order.js';
import renderSingleOrderItem from './views/orderItem.js';

let orderItems = new OrderItems();
let orderItem = new OrderItem();
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
        'placedorder': 'renderPlaced'
    },
    home() {
        beerItems.fetch();
        entreeItems.fetch();
        games.fetch();
        beerContainer.append(renderCourseList(beerItems, orderItem));
        entreeContainer.append(renderCourseList(entreeItems, orderItem));
        gameContainer.append(renderCourseList(games, orderItem));
        //order stuff
        orderContainer.append(renderOrder(orderItem, orderItems));
    },
    renderPlaced() {
        $('.menu-container').hide();
        $('.place-order').hide();
        renderOrder(orderItem);
        orderContainer.css({
            'width': '50%',
            'margin': '0 24%'
        });
    }

});

const router = new Router();

export default router;
