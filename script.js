document.getElementById('addTodoBtn').addEventListener('click', function() {
	let todo = document.getElementById('newTodoInput').value;
	const li = document.createElement('li');

	if(todo == ""){
		return null;
	}else {
		li.innerText = todo;
	}

	document.getElementById('toDoList').append(li);
})