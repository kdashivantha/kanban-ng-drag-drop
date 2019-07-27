import { Task } from './task';

export class Column {
    constructor(
        public name:string,
        public tasks:Task[]) {
        
    }
}