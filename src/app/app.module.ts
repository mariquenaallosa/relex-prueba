// Modulos necesarios
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PostService } from './core/services/post.service';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { PostsRoutingModule } from './posts/posts-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    PostsModule,
    PostsRoutingModule,
    SharedModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
