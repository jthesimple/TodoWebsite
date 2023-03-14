import { Project } from "./classes";
import { Todo } from "./classes";
export{addProjectFolderListener};


const addProjectFolderListener = function(){
    const addFolder = document.querySelector('.projects-icon');
    addFolder.addEventListener('click', createFolder);
};

function createFolder(){
    addFolderPopUp();
    submitFolder(); 
};

function addFolderPopUp(){
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `<h2 class="content-title">Create new Folder</h2>
    <input type="text" placeholder="Folder Name" id="folder-name">
    <p>Your todos will be stored in this folder.</p>
    <input class='create-folder' type="submit">`
};

function submitFolder(){
    const submit = document.querySelector('.create-folder');
    submit.addEventListener('click', Folder);
};

function Folder(){
    const title = document.querySelector('#folder-name').value;
    const projectContainer = document.querySelector('.project-tabs');
    const projectHeader = document.createElement('h3');
    projectHeader.setAttribute('class', 'created-project');
    const folder = new Project(title);
    console.log(folder);
    
    projectHeader.textContent = folder.getName();
    projectContainer.append(projectHeader);

    clearMainContent();
    populateTodoField(folder);
    createTodoListener();
};

function clearMainContent(){
    const mainContent = document.querySelector('.main-content');
    while (mainContent.firstChild){
        mainContent.removeChild(mainContent.firstChild);
    };
};

function populateTodoField(project){
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `<h1 class='project-folder'>${project.getName()}</h1><h2>Todo List</h2>
    <p>Create or edit existing task below.</p>
    <ul class="todo-list">
    </ul>
    <img class='todo-icon' src="../images/plus-circle-outline.svg" alt="add icon">`;


};

function createTodoListener(){
    const taskIcon = document.querySelector('.todo-icon');
    taskIcon.addEventListener('click', createTodo);
};

function createTodo(){
    const mainContent = document.querySelector('.main-content');
    const todoList = document.querySelector('.todo-list');
    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('class','todo-container');
    todoContainer.innerHTML = `<p>Fill the text boxes below to add your new todo</p>
        <input type="text" placeholder="title" class='todo-title'>
        <input type="text" placeholder="description" class='todo-description'>
        <input type="date" placeholder="Due Date" class='todo-dueDate'>
        <input type="text" placeholder="Priority" class='priority'>
        <inpt type="text" placeholder="Notes" class='notes'>
        <input type='submit' class='submit-todo'>`
    ;
    mainContent.insertBefore(todoContainer,todoList);
    submitTodoListener();
};

function submitTodoListener(){
    const submit = document.querySelector('.submit-todo');
    submit.addEventListener('click', submitTodo);
};

function submitTodo(){
   
    const title = document.querySelector('.todo-title').value;
    const description = document.querySelector('.todo-description').value;
    const date = document.querySelector('.todo-dueDate').value;
    const priority = document.querySelector('.priority').value;
    const notes = document.querySelector('.notes').value;

    const todo = new Todo(title, description, date, priority, notes);
    
};

function selectProject(){

};