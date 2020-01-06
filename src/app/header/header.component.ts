import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuarios: Array<any> = []
  constructor() { 
    this.usuarios = [
      { name: 'Syria'},
    ]
  }

}
