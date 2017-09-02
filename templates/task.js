const tasks = ({author, title, status}) => {
  let statusClassname = '';
  switch (status) {
    case 'Expiring':
      statusClassname = 'c-task__status--expiring';
      break;
    case 'Urgent':
      statusClassname = 'c-task__status--urgent';
      break;
  }
  return `<li class="c-task">
                    <div class="c-task__details">
                        <img class="c-task__user-image" src="${author.image}"/>
                        <div>
                            <div class="c-task__title-status">
                                <div class="c-task__title">${title}</div>
                                <div class="c-task__status ${statusClassname}">${status}</div>
                            </div>
                            <div class="c-task__user-name">By ${author.name}</div>
                        </div>
                    </div>
                    <div class="l-right">
                    </div>
                </li>`
};

export default tasks;