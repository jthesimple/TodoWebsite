export {gymSession};
export {closeSession};
import { ExerciseSession } from "./classes";
export{createNewProjectFolder};
import { Sessions } from "./classes";
import { Project } from "./classes";
export{clearMainContentsListener}

const gymSession = function(){
    const addButton = document.querySelector('.icon');
    addButton.addEventListener('click', createGymSession);
};

const closeSession = function(){
    const closeButton = document.querySelector('.close-modal-btn');
    closeButton.addEventListener('click', closeGymSession);
};

const createGymSession = function(){
    const modal = document.querySelector('.modal-container')
    modal.classList.add('open');
}; 

const closeGymSession = function(){
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
    
}

function clearMainContentsListener(){
    const project = document.querySelector('.project')
    project.addEventListener('click', clearMainContents)
}

function clearMainContents(){
    const mainContentElement = document.querySelector('.main-content');
    while (mainContentElement.firstChild) {
        mainContentElement.removeChild(mainContentElement.lastChild);
    }

    mainContentElement.innerHTML = `<div class="project-content">
                                    <h2>{project name}</h2>
                                    </div>`

 };
