import $ from 'jquery';
import Backbone from 'backbone';

function renderSingleItem(item, orderItems) {
  const li = $(`
    <li>
        ${item.get('item')}
        ${item.get('price')}
      <span>${item.get('description')}</span>
    </li>
    `);
    li.on('click', (e) => {
      orderItems.create({
        name  : item.get('item'),
        price : item.get('price')});

      // const order = $('.order-container');
      // let itemsOrdered = $(`<h6>${item.get('item')}</h6>
      // <span>${item.get('price')}</span>`);
      // order.append(itemsOrdered);
    });
return li;
    }
export default renderSingleItem;
