import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomSectionComponent } from './custom-section/custom-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomSectionComponent,
    AboutSectionComponent,
    ReviewsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
