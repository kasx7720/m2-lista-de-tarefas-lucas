const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    ulElement.appendChild(taskItem);
  });
}

function createTaskItem(task) {
  const liElement = document.createElement('li');
  const divElement = document.createElement('div');
  const spanElement = document.createElement('span');
  const pElement = document.createElement('p');
  const buttonElement = document.createElement('button');
  const imgElement = document.createElement('img');
  
  liElement.classList.add('task__item');
  divElement.classList.add('task-info__container');
  spanElement.classList.add('task-type');
  pElement.textContent = task.title;
  buttonElement.classList.add('task__button--remove-task');
  imgElement.src = './assets/trash-icon.svg'; 
  imgElement.alt = 'Remover tarefa'; 
  buttonElement.appendChild(imgElement);
  
  switch(task.type) {
    case 'Urgente':
        spanElement.classList.add('span-urgent');
        break;
    case 'Importante':
        spanElement.classList.add('span-important');
        break;
    case 'Normal':
        spanElement.classList.add('span-normal');
        break;
}

divElement.appendChild(spanElement);
divElement.appendChild(pElement);
liElement.appendChild(divElement);
liElement.appendChild(buttonElement);

buttonElement.addEventListener('click', function() {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    renderElements(tasks);
  }
});

return liElement;

}

renderElements(tasks);

document.querySelector('.form__button--add-task').addEventListener('click', (event) => {
  event.preventDefault();
  
  const title = document.getElementById('input_title').value;
  const type = document.getElementById('input_type').value;

  const task = { title, type };
  tasks.push(task);
  renderElements(tasks);

  document.getElementById('input_title').value = '';
  document.getElementById('input_type').value = '';

});