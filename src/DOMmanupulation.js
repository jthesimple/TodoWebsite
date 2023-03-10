export {addProjectListener};
export {closeProjectListener};
export{createNewProjectFolder};
import { Project } from "./classes";
export{clearMainContentsListener}

const addProjectListener = function(){
    const addButton = document.querySelector('.icon');
    addButton.addEventListener('click', createNewProject);
};

const closeProjectListener = function(){
    const closeButton = document.querySelector('.close-modal-btn');
    closeButton.addEventListener('click', closeProjectModal);
};

const createNewProject = function(){
    const modal = document.querySelector('.modal-container')
    modal.classList.add('open');
}; 

const closeProjectModal = function(){
    const modal = document.querySelector('.modal-container')
    modal.classList.remove('open');
};

function createNewProjectFolder(){
    const addButton = document.querySelector('.close-modal-btn');
    addButton.addEventListener('click', createProject);
};

function createProject(){
    let name = document.querySelector('#project-name').value;
    let newInstance = new Project(name);
    createElementsforNewProjectFolder(newInstance);

};

function createElementsforNewProjectFolder(project){
    const tabs = document.querySelector('.project-tabs');
    const folder = document.createElement('h3');
    folder.setAttribute('class', 'project');
    tabs.appendChild(folder);
    folder.textContent = project.getName();
    clearMainContentsListener(project)
    
}

function clearMainContentsListener(project){
    const project = document.querySelector('.project')
    project.addEventListener('click', clearMainContents(project))
}

function clearMainContents(project){
    const mainContentElement = document.querySelector('.main-content');
    while (mainContentElement.firstChild) {
        mainContentElement.removeChild(mainContentElement.lastChild);
    }

    mainContentElement.innerHTML = `<div class="project-content">
                                    <h2>${project.getName()}</h2>
                                    </div><div>
                                    <button>Add Task</button>
                                    </div>`

 };

 
