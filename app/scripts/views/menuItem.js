import $ from 'jquery';

function renderSingleItem(item) {
  const li = $(`
    <li>
        ${model.get('item', 'price', 'description')}
    </li>
    `);
    li.on('click', (e) => {

    });
}
