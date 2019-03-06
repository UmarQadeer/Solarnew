import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ProjectsComponent,
    GalleryComponent,
    ContactusComponent,
    SlideshowComponent,
    FooterComponent
  ],
  imports: [BrowserModule,
    NgxSpinnerModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot([
      {
        path: ' ',
        component: AppComponent
      },
      {
        path: "",
        redirectTo: "home", pathMatch: 'full'
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "services",
        component: ServicesComponent
      },
      {
        path: "aboutus",
        component: AboutusComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      },
      {
        path: "gallery",
        component: GalleryComponent
      },
      {
        path: "contactus",
        component: ContactusComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
