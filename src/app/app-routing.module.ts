import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '*',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modal/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signwithemail',
    loadChildren: () => import('./signup/signwithemail/signwithemail.module').then( m => m.SignwithemailPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./modal/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'phtlib',
    loadChildren: () => import('./phtlib/phtlib.module').then( m => m.PhtlibPageModule)
  },
  {
    path: 'makeup',
    loadChildren: () => import('./makeup/makeup.module').then( m => m.MakeupPageModule)
  },
  {
    path: 'signwithemail2',
    loadChildren: () => import('./signup/signwithemail2/signwithemail2.module').then( m => m.Signwithemail2PageModule)
  },
  {
    path: 'signwithemail3',
    loadChildren: () => import('./signup/signwithemail3/signwithemail3.module').then( m => m.Signwithemail3PageModule)
  },
  {
    path: 'signwithemail4',
    loadChildren: () => import('./signup/signwithemail4/signwithemail4.module').then( m => m.Signwithemail4PageModule)
  },
  {
    path: 'signinwithemail1',
    loadChildren: () => import('./signin/signinwithemail1/signinwithemail1.module').then( m => m.Signinwithemail1PageModule)
  },
  {
    path: 'signinwithemail2',
    loadChildren: () => import('./signin/signinwithemail2/signinwithemail2.module').then( m => m.Signinwithemail2PageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
