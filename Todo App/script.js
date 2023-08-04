const formTodo = document.querySelector(".form-todo")
const inputTodo = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")

formTodo.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodoText = inputTodo.value
    const newLi = document.createElement('li')
    const newLiInnerHtml = `  <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
newLi.innerHTML=newLiInnerHtml
todoList.append(newLi)
    inputTodo.value = ""
})
todoList.addEventListener("click",(e)=>{
    if (e.target.classList.contains("remove")) {
        const targetedLi=e.target.parentNode.parentNode
        targetedLi.remove()
    }
    if (e.target.classList.contains("done")) {
        const lineStyle=e.target.parentNode.previousElementSibling
        lineStyle.style.textDecoration="line-through"
    }
})