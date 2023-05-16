import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CorsiComponent } from './components/corsi/corsi.component';
import { ProfessoriComponent } from './components/professori/professori.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { SeguitiComponent } from './components/seguiti/seguiti.component';
import { EsamiComponent } from './components/esami/esami.component';
import { RicercheComponent } from './components/ricerche/ricerche.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentiComponent,
    CorsiComponent,
    ProfessoriComponent,
    TutorComponent,
    SeguitiComponent,
    EsamiComponent,
    RicercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
