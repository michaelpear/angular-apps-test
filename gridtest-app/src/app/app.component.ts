import { Component, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChildren('myChild') child: QueryList<any>;

  ngAfterViewInit() {
    console.log("App children length= "+ this.child.length)
  }
}
