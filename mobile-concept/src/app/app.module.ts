import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SenderNameComponent } from './vaardprocesser-skeleton/sender-name/sender-name.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { VaardprocesService } from './vaardproces.service';
import { VaardprocesserSkeletonComponent } from './vaardprocesser-skeleton/vaardprocesser-skeleton.component';
import { VaardprocesDetailComponent } from './vaardprocesser-skeleton/step-typer/step-typer.component';
import { FritextComponent } from './vaardprocesser-skeleton/step-typer/fritext/fritext.component';
import { RegistreringComponent } from './vaardprocesser-skeleton/step-typer/registrering/registrering.component';
import { ValComponent } from './vaardprocesser-skeleton/step-typer/val/val.component';
import { PredefinedTextComponent } from './vaardprocesser-skeleton/step-typer/predefined-text/predefined-text.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    SenderNameComponent,
    ErrorComponent,
    HeaderComponent,
    VaardprocesserSkeletonComponent,
    VaardprocesDetailComponent,
    FritextComponent,
    RegistreringComponent,
    ValComponent,
    PredefinedTextComponent,
    NotificationScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    
  ],
  providers: [VaardprocesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
