import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: ListComponent, children: [
          {path: 'detail', component: DetailComponent}
        ]
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }