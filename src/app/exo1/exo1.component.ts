import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component {
  InputedText = 'NOM';
  size = '20';
  family = "Arial";
  side = "left";

  inputedText(element: string) { 
    element === "" ? this.InputedText = "NOM" : this.InputedText = element.toUpperCase();
  }

  newPolicy(select: any) {
    this.family = select.target.value;
  }

  newSize(element:any ) { 
    element.value === "" ? this.size = '20' : this.size = element.value;
  }

  newSide(element: any) {
    this.side = element.target.value
  }
}
