export interface IColumn {
    fieldName: string;
    header: string;

}
//The class...do I even need this?

export class Column implements IColumn{

    constructor(public fieldName:string, public header:string){

    }
}
