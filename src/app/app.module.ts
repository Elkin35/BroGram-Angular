import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TareaNuevaComponent } from './tarea-nueva/tarea-nueva.component';
import { TareaCompletadaComponent } from './tarea-completada/tarea-completada.component';
import { FormsModule } from '@angular/forms';
import { QuienesCompComponent } from './quienes-comp/quienes-comp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesCompComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TareaNuevaComponent,
    TareaCompletadaComponent,
    QuienesCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
