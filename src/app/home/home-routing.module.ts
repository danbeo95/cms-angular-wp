import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'post',loadChildren:'./post/post.module#PostModule'},
    {path:'media',loadChildren:'./media/media.module#MediaModule'},
    {path:'',redirectTo:'post',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
