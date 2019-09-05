import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PresentersPageComponent } from './components/presenters-page/presenters-page.component';


const routes: Routes = [
  {
    path: 'presenters-page',
    component: PresentersPageComponent
  },
  {
    path: '**',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
