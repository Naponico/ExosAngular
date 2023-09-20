import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueComponent } from '../historique/historique.component';

@Component({
  selector: 'app-exo2',
  standalone: true,
  imports: [CommonModule,HistoriqueComponent],
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component {
  static id:number=0
  firstNum:number = 0;
  secondNum:number = 0;
  operator:string = "+";
  result:number = 0;
  toSave: Array<any> = [];
  now: Date=new Date()

  changeValue(input:any, pos:number) {
    switch (pos) { 
      case 1:
        input.target.value == null ? this.firstNum = 0 : this.firstNum = Number(input.target.value);
        break;
      case 2:
        input.target.value == null ? this.secondNum = 0 : this.secondNum = Number(input.target.value);
        break;
    }
  }
  changeOperator(select:any) {
    this.operator = select.target.value;
  }
 

  eval() { 
    switch (this.operator) { 
      case "+":
        this.result = this.firstNum + this.secondNum;
        break;
      case "-":
        this.result = this.firstNum - this.secondNum;
        break;
      case "*":
        this.result = this.firstNum * this.secondNum;
        break;
      case "/":
        this.result = this.firstNum / this.secondNum;
        break;
    }
    this.save();
  }

  save() {
    this.now = new Date();
    this.toSave.push({ "firstNum": this.firstNum, "secondNum": this.secondNum, "operator": this.operator,"result": this.result, "id": Exo2Component.id,"date":this.now.toLocaleString() })
    Exo2Component.id++;
  }
  

  deleteEntry(id: any) {
    let button = document.getElementById(id.target.id)
    button!.parentElement!.style!.display! = "none";
    button?.parentElement?.removeChild(button)
    this.toSave.splice(id.target.id,1);
    this.result = 0;
   }
}
