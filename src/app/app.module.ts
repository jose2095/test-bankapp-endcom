import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { CardComponent } from './components/card/card.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule} from '@angular/common/http';
import { CardPipe } from './pipes/card.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfocardComponent,
    CardComponent,
    TablaComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    ModalComponent,
    CardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
