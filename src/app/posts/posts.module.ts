import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostsRoutingModule } from './posts-routing.module';


@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PostsRoutingModule
  ],
  exports:[
    PostListComponent,
    PostCreateComponent
  ]
})
export class PostsModule { }
