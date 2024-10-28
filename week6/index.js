/**
 * takes input puts it in ul
 */
function addTodo(){
    console.log("addTodo function called");
    const input = document.getElementById("list-input");
    console.log("input value: ", input.value);

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
}