import Backbone from 'backbone';
import $ from 'jquery';
import renderSingleOrderItem from './orderItem';

function renderOrder (orderItems) {
  const orderDiv = $(`
    <div class="order-div">
    </div>
    `);

    orderItems.forEach((item)=> {
      orderDiv.append(renderSingleOrderItem(item));
    });

      orderItems.on('update', () => {
        orderDiv.empty();

        let subtotal = 0;
        let tax = 0;
        let total = 0;
        orderItems.forEach((item) => {

          let itemPrice = item.get('price');

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
          <div class="tax-div">Tax: $${tax}
          </div>
          `);
        let totalDiv = $(`
          <div class="total-div">Total: $${total}
          </div>
          `);
          orderDiv.append(taxDiv);
          orderDiv.append(totalDiv);

      });
          return orderDiv;
    }
export default renderOrder;
