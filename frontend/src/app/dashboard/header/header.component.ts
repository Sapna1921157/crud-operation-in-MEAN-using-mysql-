import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  CurrentComponent = '';
  currentComponent: any;
  username: any;
  userType: any;

  constructor(private router: Router
    
    ) {}

    ngOnInit(): void {
  
    
    }
 
}
