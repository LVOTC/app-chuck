import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const APP_Routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);
