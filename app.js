import './dist/style.scss';
import data from './data';
import taskTemplate from './templates/task';

$(document).ready(() => {
  const taskContainer = $('#js-tasks-container');

  $('#js-open-menu').on('click', () => {
    $('#js-menu').addClass('is-open');
  });

  $('#js-close-menu').on('click', () => {
    $('#js-menu').removeClass('is-open');
  });


  data.tasks.forEach((task) => {
    taskContainer.append(taskTemplate(task));
  })
});