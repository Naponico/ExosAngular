import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentTime = new Date().toLocaleTimeString();
  timeDetail: Array<string> = [];

  update = setInterval(() => { 
    this.updateTime();
  },1000)
  


  updateTime() { 
    this.timeDetail[0] = new Date().toLocaleDateString();
    this.timeDetail[1] = new Date().toLocaleTimeString();
  }


  
}

