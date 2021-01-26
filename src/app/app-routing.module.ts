import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaginaVaciaComponent } from './pagina-vacia/pagina-vacia.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdadGuard } from './edad.guard';

const rutas: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dash/:edad', component: DashboardComponent, canActivate:[EdadGuard]},
  // { path: 'dash', component: DashboardComponent, canActivate:[EdadGuard]},
  { path: 'prueba', component: UnoComponent },
  { path: 'prueba2', component: DosComponent },
  { path: 'home', component: HomeComponent },  
  { path: '**', component: PaginaVaciaComponent }
]

// const rutas: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: "full"
//       },
//       {
//         path: 'home',
//         component: HomeComponent
//       },
//       {
//         path: 'dash',
//         component: DashboardComponent,
//         canActivate: [EdadGuard]
//       }
//     ]
//   }

// ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
