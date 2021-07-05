import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopComponent } from './sections/top/top.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkilsComponent } from './sections/skils/skils.component';
import { TimelineModule } from './components/timeline/timeline.module';
import { HeaderComponent } from './layout/header/header.component';
import { ServicesComponent } from './sections/services/services.component';
import { IconBlockComponent } from './components/icon-block/icon-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './sections/contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpClientModule } from "@angular/common/http";
>>>>>>> 3c870df492894382b622e86c2b775953c9d78246

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    TopComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkilsComponent,
    HeaderComponent,
    ServicesComponent,
    IconBlockComponent,
    ContactComponent,
  ],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, TimelineModule, FontAwesomeModule, ReactiveFormsModule],
=======
  imports: [BrowserModule, AppRoutingModule, TimelineModule, FontAwesomeModule, ReactiveFormsModule,HttpClientModule],
>>>>>>> 3c870df492894382b622e86c2b775953c9d78246
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
