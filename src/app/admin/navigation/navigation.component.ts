import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { 
    console.log("se crea navigation component");
    var script = document.createElement('script');
    document.body.appendChild(script);
    script.src = "/assets/custom.min.js";
  }

  ngOnInit() {
  }

}
