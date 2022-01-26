//selectors
const todoInput = document.getElementById('todo-input')
const todoButton = document.getElementById('todo-button')
const todoList = document.getElementById('todo-list')

todoButton.addEventListener('click', addTodo)

function addTodo(event){
	event.preventDefault()
	//div
	if(todoInput.value == 0){
		alert('digite sua tarefa')
		return false
	}else{
		const todoDiv = document.createElement('div')
		todoList.appendChild(todoDiv)
		todoDiv.classList.add("todo")

		//li
		const newTodo = document.createElement('li')
		newTodo.classList.add("todo-item")
		newTodo.innerText = todoInput.value
		todoDiv.appendChild(newTodo)
		
		//checked
		const checkButton = document.createElement('button')
		checkButton.classList.add("complete")
		checkButton.innerHTML = `<i class="fas fa-check"></i>`
		todoDiv.appendChild(checkButton)
		
		//trash
		const trashButton = document.createElement('button')
		trashButton.classList.add("trash")
		trashButton.innerHTML = `<i class="fas fa-trash"></i>`
		todoDiv.appendChild(trashButton)


		todoList.addEventListener('click', (e)=>{
			const item = e.target;

			if(item.classList[0] === 'trash'){
				const todo = item.parentElement;
				todo.remove()
			}

			if(item.classList[0] === "complete"){
				const todo = item.parentElement;
				todo.classList.toggle("completed")
			}
		})
	}
}