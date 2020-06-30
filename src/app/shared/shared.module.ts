import { NgModule } from "@angular/core";


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { PAGES_ROUTES } from '../pages/pages.routes';


@NgModule({
  declarations:[
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  imports:[
    PAGES_ROUTES
  ],
  exports: [
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ]
})
export class SharedModule {}