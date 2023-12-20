import {
  Component,
  OnInit,
  ElementRef,
} from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  allPosts: Post[] = [];
  filteredPosts: Post[] = [];
  page: number = 1;
  searchTerm: string = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.page).subscribe(
      (posts) => {
        this.allPosts = posts;
        this.applyFilter();
        console.log('Posts cargados correctamente: ', this.allPosts);
      },
      (err) => console.log('Error al cargar los posts: ', err)
    );
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.updateUrl();
    this.loadPosts();
    this.scrollToTop();
  }

  onSearchChange(): void {
    this.page = 1;
    this.updateUrl();
    this.applyFilter();
  }

  applyFilter(): void {
    // Filtra los posts por título usando el texto de búsqueda en la lista completa
    this.filteredPosts = this.allPosts.filter((post) =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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

  scrollToTop(): void {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }


}
