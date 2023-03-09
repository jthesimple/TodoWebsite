export {gymSession};
export {closeSession};
import { ExerciseSession } from "./classes";
export{getValues};
import { Sessions } from "./classes";

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

function getValues(){
    const addButton = document.querySelector('.close-modal-btn');
    addButton.addEventListener('click', sesh);
};

function sesh(){
    let array = new Sessions;
    
    
};


