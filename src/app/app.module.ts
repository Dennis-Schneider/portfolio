import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartSectionComponent } from './start-section/start-section.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartSectionComponent,
    MenuComponent,
    AboutMeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
