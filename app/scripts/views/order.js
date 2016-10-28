import Backbone from 'backbone';
import $ from 'jquery';
import renderSingleOrderItem from './orderItem';

function renderOrder (orderItem) {
  const orderDiv = $(`
    <div class="order-div">
    </div>
    `);
    orderItem.get('order').forEach((item)=> {
      orderDiv.append(renderSingleOrderItem(item));
    });

      orderItem.on('change', () => {
        orderDiv.empty();

        let subtotal = 0;
        let tax = 0;
        let total = 0;
        orderItem.get('order').forEach((item) => {

          let itemPrice = item.price;

          subtotal += itemPrice;
          console.log(subtotal);
          tax +=itemPrice*0.08;
          console.log(tax);
          total = tax+subtotal;
          console.log(total);
          // console.log(itemPrice);
          orderDiv.append(renderSingleOrderItem(item));

          // console.log(total);
          // console.log(item);
        });
        let taxDiv = $(`
          <div class="tax-div">Tax: $${Math.round(tax*100)/100}
          </div>
          `);
        let totalDiv = $(`
          <div class="total-div">Total: $${Math.round(total*100)/100}
          </div>
          `);
        const orderButton = $(`
          <button class="place-order">Place Order</button>
          `);
          orderDiv.append(taxDiv);
          orderDiv.append(totalDiv);
          orderDiv.append(orderButton);
          orderButton.on('click', (e) => {
            location.hash = 'placedorder';
          });
      });

          return orderDiv;
    }
export default renderOrder;
