import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sort, MatSortModule} from '@angular/material/sort';


export interface Transaction{
  date: string;
  montant: number;
  solde: number;
  label: string;
  id: string;
}

@Component({
  selector: 'app-exo3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component {
  //--------------------------------------------------------- Declaration
  headers = ['date', 'montant', 'solde', 'libellé'];
  transactionsURL = '/assets/data/transactions.json';
  baseURL='/assets/data/'
  //Stoque le retour de la requete HTTP
  result: Array<any> = []
  //stoque les valeurs trier ou non
  Sortedresult: Array<any> = []
  res = this.getTransactions().subscribe(observa => {
    this.result = observa
    this.cleanArrayDate(this.result);
    this.Sortedresult = this.result
  });
  
  //---------------------------------------------------------Methods

  constructor(private http: HttpClient) { }

  cleanArrayDate(Array: Array<any | string>) {
    for (var transaction of Array) {
      let date = new Date(transaction.date.replace(/([+\-]\d\d)(\d\d)$/, "$1:$2"))
      transaction.date = date;
    }
  }

  getTransactions(): Observable<string | any> {
    return this.http.request('GET', this.transactionsURL, { responseType: 'json' })
  }
  
  sortColumn(event: Event) {
    var target = event.target as HTMLElement
    let col = target.getAttribute("sortable")
    switch (col) {
      case "date":
        this.Sortedresult = this.SortDate(target);
        break;
      case "montant":
        this.Sortedresult = this.SortMontant(target);
        break;
      case "solde":
        this.Sortedresult = this.SortSolde(target);
        break;
      case "label":
        this.Sortedresult = this.SortLabel(target);
        break;
    }
  }
  //Sorting methods
  SortDate(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.result;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "true")
        return a.date - b.date;
      });
    } else {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "false")
        return b.date - a.date
      });
    }
    return toSort;
  }
  SortMontant(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.result;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "true")
        return a.amount - b.amount;
      });
    } else {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "false")
        return b.amount - a.amount
      });
    }
    return toSort;
  }

  SortSolde(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.result;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "true")
        return a.balance - b.balance;
      });
    } else {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "false")
        return b.balance - a.balance
      });
    }
    return toSort;
  }
  SortLabel(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.result;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "true")
        return String(a.label).localeCompare(b.label)
      });
    } else {
      toSort.sort((a: any, b: any) => {
        target.setAttribute("sorted", "false")
        return String(b.label).localeCompare(a.label)
      });
    }
    return toSort;
  }

  openTransDetail(event: Event) {
    let target = event.target as HTMLElement;
    window.location.href = "/transDetail?id=" + target.parentElement?.id;
   }
}
