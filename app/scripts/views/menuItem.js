import $ from 'jquery';
import Backbone from 'backbone';

function renderSingleItem(item, orderItem) {
  const li = $(`
    <li>
        ${item.get('item')}
        ${item.get('price')}
      <span>${item.get('description')}</span>
    </li>
    `);
    li.on('click', (e) => {
      orderItem.updateOrder({
        name  : item.get('item'),
        price : item.get('price')});

    orderItem.addPrice(item.get('price'));
    orderItem.getTotal(item.get('price'));
    orderItem.getTax(item.get('price'));
      });
return li;
    }
export default renderSingleItem;
