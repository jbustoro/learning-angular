// import router modules
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import components
import { HomeComponent } from "./home/home.component";
import { ShoesComponent } from "./shoes/shoes.component";
import { VideogamesComponent } from "./videogames/videogames.component";
import { CoursesComponent } from "./courses/courses.component";
import { ExternalComponent } from "./external/external.component";


// routes array
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "shoes", component: ShoesComponent },
  { path: "videogames", component: VideogamesComponent },
  { path: "courses", component: CoursesComponent },
  { path: "courses/:name/:followers", component: CoursesComponent },
  { path: "external", component: ExternalComponent },
  { path: "**", component: HomeComponent }
];

// export router modules
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
