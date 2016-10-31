import $ from 'jquery';
import Backbone from 'backbone';
import renderSingleItem from './menuItem';

function renderCourseList(entreeItems, orderItems) {
    const ul = $(`
    <ul>
    </ul>
    `);
    entreeItems.forEach((item) => {
        ul.append(renderSingleItem(item, orderItems));
    });

    entreeItems.on('update', () => {
        entreeItems.forEach((item) => {
            ul.append(renderSingleItem(item, orderItems));
            // console.log(item);
        });

    });
    return ul;
}


export default renderCourseList;
