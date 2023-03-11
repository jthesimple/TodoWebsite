export {Project}


const Todo = class {
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes; 
    }
}

const Project = class {
    constructor(name){
        this.name = name;
        this.contents = [];
    }

    getName(){
        return this.name;
    }

    addTodo(todo){
        this.contents.push(todo);
    }

    displayContents(){
        console.log(this.content);
    }

    static createFolder(){
        const title = document.querySelector('#folder-name').value;
        const folder = new Project(title);
        console.log(folder);
        return folder;
    }
}
