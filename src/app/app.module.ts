import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './grid/grid.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReferenceTempComponent } from './reference-temp/reference-temp.component';
import { ReferenceTempChildComponent } from './reference-temp-child/reference-temp-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildsChildComponent } from './view-childs-child/view-childs-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    HeaderComponent,
    GridComponent,
    CardsComponent,
    FilterComponent,
    SearchComponent,
    ReferenceTempComponent,
    ReferenceTempChildComponent,
    ViewChildComponent,
    ViewChildsChildComponent,
    NgContentComponent,
    NgContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
