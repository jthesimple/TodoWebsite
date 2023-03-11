import { Project } from "./classes";
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
    submit.addEventListener('click', Project.createFolder);
};

function displayFolder(folder){
    console.log('win');
};