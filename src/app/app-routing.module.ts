import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceTempComponent } from './reference-temp/reference-temp.component';
import { MainBodyComponent } from './main-body/main-body.component';

const routes: Routes = [
  {path: '', component: MainBodyComponent},
  { path: 'reference', component: ReferenceTempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
