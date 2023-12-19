import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const titleControl = this.postForm.get('title');
      const contentControl = this.postForm.get('content');
  
      if (titleControl && contentControl) {
        const postData: Post = {
          title: titleControl.value,
          body: contentControl.value,
        };
  
        this.postService.createPost(postData).subscribe(
          (response) => {
            this.router.navigate(['/publicaciones']);
            console.log('Post creado con éxito:', response);
            // Puedes redirigir al usuario a la página de listado de posts u otra acción después de la creación.
          },
          (error) => {
            console.error('Error al crear el post:', error);
          }
        );
      }
    }
  }
}  