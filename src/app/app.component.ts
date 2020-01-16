import { Component } from '@angular/core';
import printJS from 'print-js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  printSection(id){
printJS({printable:id, scanStyles: false,type:'html'})
  }
}
