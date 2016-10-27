import $ from 'jquery';
import menuItem from './menuItem';

function renderCourseList(items) {
  const ul = $(`
    <ul>
    </ul>
    `);
    items.forEach((item) => {
      ul.append(renderSingleItem(item));
    });
    return ul;
}

export default renderCourseList;
