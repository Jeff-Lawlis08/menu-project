import $ from 'jquery';
import menuItem from './menuItem';
import Backbone from 'backbone';
import renderSingleItem from './menuItem';

function renderCourseList(entreeItems) {
  const ul = $(`
    <ul>
    </ul>
    `);
entreeItems.forEach((item)=> {
  ul.append(renderSingleItem(item));
});

  entreeItems.on('update', () => {
    entreeItems.forEach((item) => {
      ul.append(renderSingleItem(item));
      console.log(item);
    });

  });
      return ul;
}

export default renderCourseList;
