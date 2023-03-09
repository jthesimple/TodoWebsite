export {ExerciseSession};
export {Sessions};


const ExerciseSession = class {
    constructor(type, date, location){
        this.date = date;
        this.location = location;
        this.type = type;
    }

    newSession(){
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;
        const location = document.getElementById('location').value;
        let object = new ExerciseSession(type,date,location); 
        return object;

    }
}

const Sessions = class{
    constructor(){
        this.sessions = [];
    }

    pushObject(obj){
        this.sessions.push(obj);
    }


    getAllSessions(){
        console.log(this.sessions);
    }


}




