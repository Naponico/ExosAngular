import { Router } from "@angular/router";
import { Routes, RouterModule } from '@angular/router';

import { Exo1Component } from './exo1/exo1.component';
import { AppComponent } from "./app.component";
import { Exo2Component } from "./exo2/exo2.component";
import { Exo3Component } from "./exo3/exo3.component";
import { TransDetailComponent } from "./trans-detail/trans-detail.component";


const routes: Routes = [
    { path: '', component: Exo1Component },
    { path: 'Exo1', component: Exo1Component },
    { path: 'Exo2',component:Exo2Component},
    { path: 'Exo3', component: Exo3Component },
    {path: 'transDetail',component:TransDetailComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);