import { Component , OnInit } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{

  constructor(private router: Router
    
    ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
