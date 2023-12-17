import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  constructor(private postService: PostService, private router: Router){}

  ngOnInit(): void {
   
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Obtén los valores del formulario
      const title = form.value.title;
      const body = form.value.body;

      // Crea un nuevo post
      this.postService.createPost({ title, body }).subscribe(() => {
        // Después de crear el post, redirige a la lista de publicaciones
        this.router.navigate(['/publicaciones']);
      });
    }
  }
}