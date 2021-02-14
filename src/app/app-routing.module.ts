import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './pages/card-list/card-list.component';
import { CardEditComponent } from './pages/card-edit/card-edit.component';

const routes: Routes = [
	{path: '', component: CardListComponent},
	{path: 'establishments/:id', component: CardEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
