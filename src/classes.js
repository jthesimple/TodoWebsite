export {Project}
export{Todo};


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
}
