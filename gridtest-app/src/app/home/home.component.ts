import { Component , ViewEncapsulation, ViewChild} from '@angular/core';
import {EJComponents} from 'ej-angular2';

@Component({
    selector: 'ej-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
      resize: boolean;
  btndisplay: boolean;
  @ViewChild('dialog') dialog: EJComponents <any,any>;
    constructor() {
    this.resize = false;
    this.btndisplay = false;
  }
  //Button click event handler to open the ejDialog
  onClick(event) {
   this.btndisplay = false;
   this.dialog.widget.element.ejDialog('open');
  }
  //Dialog close event handler
  onClose(event) {
    this.btndisplay = true;
  }

}
