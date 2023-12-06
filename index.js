console.log("Welcome to my Todo App")
let todoDataSection=document.getElementById('todo-data');
function addTodo(todoData){
    let rowDiv=document.createElement("div");
    let todoItem=document.createElement('div');
    let todoNumber=document.createElement('div');
    let todoDetail=document.createElement('div');
    let todoStatus=document.createElement('div');
    let todoActions=document.createElement('div');
    let deleteButton=document.createElement('button');
    let finishedButton=document.createElement('button');
    let hr = document.createElement("hr");

    //adding classes
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center")
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-action", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn","btn-danger");
    finishedButton.classList.add("btn","btn-success")

    todoNumber.textContent="2";
    todoDetail.textContent=todoData; //sets the todo text sent from the input element
    todoStatus.textContent="In progress";
    deleteButton.textContent="Delete";
    finishedButton.textContent="Finished";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataSection.appendChild(rowDiv);
}




























































































//let getTodosButton = document.getElementById('get-todos');
// getTodosButton.addEventListener('click',()=>{
//     console.log('clicked');
// })

// getTodosButton.onclick=()=>{
//     console.log("clicked");
// }
// function clickBtn(){
//     console.log("click boo")
// }