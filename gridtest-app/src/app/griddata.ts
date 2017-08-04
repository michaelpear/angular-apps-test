import { IColumn, Column } from "./icolumn";

export class Griddata {
    /*
    "id":2,"first_name":"Margarethe","last_name":"Keyse","email":"mkeyse1@bloglines.com","gender":"Female","ip_address":"167.148.20.98"
    */
     id: number;
     first_name: string;
     last_name: string;
     email: string;
     gender: string;
     ip_address: string;
     myColumns: IColumn[];
     private cols: IColumn[];
     constructor(values: Object = {}) {
         Object.assign(this,values);
         //This is terrible as it does it for each object unecessarily
         //TODO figure out a better way to construct the column info
         this.myColumns = this.getColumns();
     }
/*TODO find better way to do this from the actual field names*/
     private getFieldNames(): string[] {
         return ["id","first_name","last_name","email","gender","ip_address"
         ]

     }
     private getDisplayNames(): string[] {
         return ["Id","First Name","Last Name","Email Address","Gender","IP Address"];
     }
     private  getColumns(): IColumn[] {
         var fn = this.getFieldNames();
         var hd = this.getDisplayNames();
         this.cols  = [];
         for(var i = 0; i < fn.length; i++) {
            this.cols.push(new Column(fn[i],hd[i]));
         }
         return this.cols;
         
     }
}
