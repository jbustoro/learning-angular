import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VideogamesComponent } from "./videogames/videogames.component";
import { ShoesComponent } from "./shoes/shoes.component";
import { CoursesComponent } from "./courses/courses.component";
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideogamesComponent,
    ShoesComponent,
    CoursesComponent,
    ExternalComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      routing,
      HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
