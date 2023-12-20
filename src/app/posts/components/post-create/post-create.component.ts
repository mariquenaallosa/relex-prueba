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
  postCreated: boolean = false;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(3),Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(100), Validators.maxLength(1000)]],
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
          userId : 1,
        };
  
        this.postService.createPost(postData).subscribe(
          (response) => {
            this.postCreated = true;
            setTimeout(() => {
              this.router.navigate(['/publicaciones']);  
            }, 3000);
            console.log('Post creado con éxito:', response);
          },
          (error) => {
            console.error('Error al crear el post:', error);
          }
        );
      }
    }
  }


}  