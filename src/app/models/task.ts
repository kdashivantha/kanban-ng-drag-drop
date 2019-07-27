import uuidv4 from 'uuid/v4';

export class Task {
    
    public Id:string;

    constructor(
        public title:string,
        public points:number,
        public assignee?:string
    ) {
        this.Id = uuidv4();
    }
}