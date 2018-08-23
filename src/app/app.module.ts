import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ngx-webstorage';
import { SimpleModalModule } from 'ngx-simple-modal';
import { BlockUIModule } from 'ng-block-ui';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { EditAnimalComponent } from './components/edit-animal/edit-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    RegisterComponent,
    AddAnimalComponent,
    EditAnimalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    Ng2Webstorage,
    SimpleModalModule,
    BlockUIModule.forRoot(),
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
