import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { VaardprocesDetailComponent } from './vaardprocesser-skeleton/step-typer/step-typer.component';
import { VaardprocesserSkeletonComponent } from './vaardprocesser-skeleton/vaardprocesser-skeleton.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/vaardprocesser', pathMatch: 'full' },
  { path: 'vaardprocesser', component: VaardprocesserSkeletonComponent },
  { path: 'detail/:id', component: VaardprocesDetailComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}