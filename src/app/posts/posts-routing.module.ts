import { NgModule } from '@angular/core';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'crear-publicacion', component: PostCreateComponent },
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
