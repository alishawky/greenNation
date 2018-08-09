import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './_services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './_services/screen.service';
import { ScreenLargeDirective } from './_directives/screen-large.directive';
import { ScreenBelowLargeDirective } from './_directives/screen-below-large.directive';
import { MenuService } from './_services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
