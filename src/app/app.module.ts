import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ParamComponent } from './param/param.component';
import { FinancialService } from './param/financial.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ParamDetailsComponent } from './param/param-details/param-details.component';

const financial : Routes=[{
  path : 'param',
  component : ParamComponent,

},
{
   path : 'header',
  component : HeaderComponent}
  ,{
    path : 'menu',
    component : MenuComponent,

  },
{
    path : 'param-details',
    component : ParamDetailsComponent,
}
]

@NgModule({
  declarations: [
    AppComponent,
    ParamComponent,
    HeaderComponent,
    MenuComponent,
    ParamDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(financial)
  ],
  providers: [FinancialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
