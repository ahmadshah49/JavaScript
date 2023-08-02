// const todoList=document.querySelector(".todo-list")
// const newTodo=document.createElement("li")
// newTodo.textContent="New Todo"
// todoList.append(newTodo)

const todoList=document.querySelector(".todo-list")
const newTodo=document.createElement("li")
newTodo.textContent='new Todo'
todoList.after(newTodo)

const todoList1=document.querySelector(".todo-list")
const newTodo1=document.createElement("li")
newTodo1.textContent='This Is New todo List '
todoList1.before(newTodo1)
// todoList1.remove()