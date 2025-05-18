import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceTempComponent } from './reference-temp/reference-temp.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
const routes: Routes = [
  {path: '', component: MainBodyComponent},
  {path: 'reference', component: ReferenceTempComponent },
  {path: 'view-child', component: ViewChildComponent},
  {path: 'ng-content', component: NgContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
