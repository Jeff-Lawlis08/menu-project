import $ from 'jquery';
import Backbone from 'backbone';

function renderSingleOrderItem (orderItems) {
  let singleOrderDiv = $(`
    <div class="single-div">
    ${orderItems.get('name')}
    ${orderItems.get('price')}
    <button class="delete">Delete</button>
    </div>
    `);
    singleOrderDiv.find('.delete').on('click', (e) => {
      // console.log(orderItems);
      orderItems.destroy({
        success: function() {console.log('deleted!');
      }
      });
    });
    return singleOrderDiv;
}
export default renderSingleOrderItem;
