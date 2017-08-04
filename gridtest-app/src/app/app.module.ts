import {GridDataService} from './grid-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
//import {EJ_GRID_COMPONENTS} from 'ej-angular2/src/ej/grid.component';
//import {EJComponents} from 'ej-angular2/src/ej/core';
//import {EJTemplateDirective} from 'ej-angular2/src/ej/template';
import {EJAngular2Module} from 'ej-angular2';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    // EJ_GRID_COMPONENTS,  EJTemplateDirective,
    //EJComponents,
    GridComponent,
    HomeComponent
    //,
    //GridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, EJAngular2Module.forRoot()
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
