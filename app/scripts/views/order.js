import Backbone from 'backbone';
import $ from 'jquery';
import renderSingleOrderItem from './orderItem';

function renderOrder(orderItem, orderItems) {
    const orderDiv = $(`
    <div class="order-div">
    </div>
    `);
    orderItem.get('order').forEach((item) => {
        orderDiv.append(renderSingleOrderItem(item));
    });

    orderItem.on('change', () => {
        orderDiv.empty();
        orderItem.get('order').forEach((item) => {
            orderDiv.append(renderSingleOrderItem(item));
        });
        let taxDiv = $(`
          <div class="tax-div">Tax: $${orderItem.get('tax')}
          </div>
          `);
        let totalDiv = $(`
          <div class="total-div">Total: $${orderItem.get('total')}
          </div>
          `);
        const orderButton = $(`
          <button class="place-order">Place Order</button>
          `);
        orderDiv.append(taxDiv);
        orderDiv.append(totalDiv);
        orderDiv.append(orderButton);
        orderButton.on('click', (e) => {
            orderItems.create({
                order: orderItem.get('order'),
                tax: orderItem.get('tax'),
                total: orderItem.get('total')
            });
            location.hash = 'placedorder';
            alert('Thanks for your order!');
        });
    });

    return orderDiv;
}
export default renderOrder;
