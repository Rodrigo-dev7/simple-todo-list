var listEle = document.querySelector(' #app ul');
var inputEle = document.querySelector(' #app input');
var buttonEle = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list-todos')) || [];


function handleTodo() {
  listEle.innerHTML = '';

  for (todo of todos) {
    var todoEle = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkEle = document.createElement('a')
    linkEle.setAttribute('href', '#')
    
    var pos = todos.indexOf(todo);
    linkEle.setAttribute('onclick', `deleteTodo(${pos})`)
    
    var linkText = document.createTextNode('Delete')

    linkEle.appendChild(linkText)
    listEle.appendChild(todoEle)

    todoEle.appendChild(todoText)
    todoEle.appendChild(linkEle)   
  }
}

handleTodo()

function addTodo() {
  var todoText = inputEle.value;

  todos.push(todoText)
  inputEle.value = '';
  handleTodo();
  safeToStorage()
}

buttonEle.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  handleTodo()
  safeToStorage()
}

function safeToStorage() {
  localStorage.setItem('list-todos', JSON.stringify(todos))
}

