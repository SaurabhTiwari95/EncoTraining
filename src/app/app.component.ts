import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //this is the info that angular needed to replace the <app-root>
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  /* 
    styleUrls is an array here where template Url isn't because we could reference to
    multiple external stylesheets, so we could add pointers to other stylesheets. 
  */
  /* 
    styles aslo takes an array but it takes an array of string where we define 
    the styles in the string 
  */
 styles :[`
 h3 {
   color: dodgerblue;
 }
 `]
 // here backticks are used to write a multi-line expression
})
export class AppComponent {
  name = 'Test';
}
