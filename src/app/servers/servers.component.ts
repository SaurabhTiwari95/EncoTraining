import { Component, OnInit } from '@angular/core';

@Component({
  /*
    selector:'[app-servers]', the app will show an error that the 
    app-servers is not a known element because we change the 
    selector to be an attribute
  */
  // Using of an Inline template
  //template:'<app-server><app-server> <app-server><app-server>',
  //selector:'.app-servers',
  selector : 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
}
