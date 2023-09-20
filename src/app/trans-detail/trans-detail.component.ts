import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-trans-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.css']
})
export class TransDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,private http:HttpClient) { }
  id:string=""
  detail: any = 0;

  dateOptions:Array<string>=[]
  lookupURL='assets/data/'

  ngOnInit() { 
    this.route.queryParams.subscribe(params => { 
      this.id = params.id;
    })
    this.http.request('GET', this.lookupURL + this.id + ".json", { responseType: 'json' }).subscribe(data => { 
      this.detail = data;
      let date = new Date(this.detail.date)
      this.dateOptions.push(date.toLocaleDateString())
      this.dateOptions.push(date.toLocaleTimeString())
    })
    
    
  }

  goBack(event:Event) {
    window.location.href = "/Exo3";
  }
}
