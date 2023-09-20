import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
  
export class HistoriqueComponent {
  historique = this.load()


  

  load() {
    console.log("loading new data")
    if (localStorage.getItem != null) { 
      return JSON.parse(localStorage.getItem("calculatorHist")!);
    }
  }

}
