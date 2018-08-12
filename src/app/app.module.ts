import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './_services/user.service';
import { UserAPI } from '../fw/users/user-api';
import { AuthGuardService } from './_services/auth-guard.service';
import { AppDataService } from './_services/app-data.service';



@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      SettingsComponent,
      CountryDetailComponent,
      CountryListComponent,
      CountryMaintComponent,
      AuthenticatedUserComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      FwModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
       UserService,
       { provide: UserAPI, useExisting: UserService},
       AuthGuardService,
       AppDataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
