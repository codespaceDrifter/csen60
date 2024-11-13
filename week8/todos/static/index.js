async function getTodos(){
    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json()
    console.log(data)
    const ul = document.querySelector('ul')
    data.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.description
        ul.appendChild(li)
    })
}

getTodos()