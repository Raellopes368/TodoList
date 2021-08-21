const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const inputTodo = document.querySelector('#inputTodo');
  const valueTodo = inputTodo.value;

  if(valueTodo){
    createLi(valueTodo);
    inputTodo.value = '';
    inputTodo.focus();
  }else {
    alert('Informe alguma tarefa!');
  }
});


function createLi(text) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const div = document.createElement('div');

  button.textContent = 'Apagar tarefa';
  div.textContent = text;

  button.onclick = () => deleteLi(li);

  const ul = document.querySelector('ul');

  ul.appendChild(li);
  li.appendChild(div);
  li.appendChild(button);
}

function deleteLi(li) {
  li.remove();
}