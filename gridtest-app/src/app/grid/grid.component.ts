import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { IColumn, Column } from "../icolumn";
import { GridDataService } from "../grid-data.service";
import { Griddata} from "../griddata";
import {EJComponents} from "ej-angular2/src/ej/core";
import { EJTemplateDirective } from 'ej-angular2/src/ej/template';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GridDataService]
})
export class GridComponent implements OnInit {
  columns: IColumn[];
  private fields: string[];
  private headers: string[];
  public gridData: Griddata[];
  public gridDataInit:  any[] = [{"id":999,"first_name":"Archy","last_name":"Morrice","email":"amorricerq@squarespace.com","gender":"Male","ip_address":"195.191.4.212"},
{"id":1000,"first_name":"Adler","last_name":"Wessing","email":"awessingrr@samsung.com","gender":"Male","ip_address":"54.125.115.177"}]
  public dataManager;
  //private gridView: EJComponents<ej.Grid,any>;
  @ViewChild('Grid') gridView: EJComponents<ej.Grid,any>; 
  @ViewChildren('myGrid') allChidren: QueryList<EJComponents<any,any>>;
  constructor(private service: GridDataService) { 


  }

  ngOnInit() {
    this.service.getAllData().subscribe(r => {
      this.gridData = r;
      this.columns = r[0].myColumns;
      this.dataManager = new ej.DataManager(r);
      /*
      console.log(this.gridView);
      this.gridView.widget.dataSource(this.dataManager);
      this.gridView.widget.refreshContent(true);
      */
    });
   


   }
  ngAfterViewInit() {
    console.log("Allchildren length"+this.allChidren.length);
    console.log(this.gridView);
   // this.gridView.widget.dataSource(this.dataManager);
   // this.gridView.widget.refreshContent(true);

  }
}
