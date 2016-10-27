import $ from 'jquery';
import Backbone from 'backbone';

function renderSingleItem(item) {
  const li = $(`
    <li>
        ${item.get('item')}
        ${item.get('price')}
        ${item.get('description')}
    </li>
    `);
return li;
    }
export default renderSingleItem;
