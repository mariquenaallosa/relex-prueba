import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  page: number = 1;
  searchTerm: string = '';

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.page).subscribe(
      (posts) => {
        this.posts = posts;
        this.applyFilter();
        console.log("Posts cargados correctamente: ", this.posts);
      },
      (err) => console.log("Error al cargar los posts: ", err)
    );
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.updateUrl();
  }

  onSearchChange(): void {
    // Reiniciar la lista de posts
    this.posts = [];
    // Resetear la página a 1, actualizar la URL y recargar los posts
    this.page = 1;
    this.updateUrl();
    this.loadPosts();
  }

  applyFilter(): void {
    // Filtra los posts por título usando el texto de búsqueda
    this.filteredPosts = this.posts.filter((post) =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.posts = this.filteredPosts
  }

  updateUrl() {
    const queryParams = {
      page: this.page,
      searchTerm: this.searchTerm || null,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}

