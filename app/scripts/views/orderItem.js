import $ from 'jquery';
import Backbone from 'backbone';

function renderSingleOrderItem(orderItem) {
    let singleOrderDiv = $(`
    <div class="single-div">
    ${orderItem.name}
    $${orderItem.price}
    <button class="delete">Delete</button>
    </div>
    `);
    singleOrderDiv.find('.delete').on('click', (e) => {
        // console.log(orderItems);
        orderItem.destroy({
            success: function() {
                console.log('deleted!');
            }
        });
    });

    return singleOrderDiv;

}
export default renderSingleOrderItem;
