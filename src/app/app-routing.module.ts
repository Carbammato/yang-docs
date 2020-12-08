import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YangFuriganaComponent } from './yang-furigana/yang-furigana.component';

const routes: Routes = [
	{ path: "yang-furigana", component: YangFuriganaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
