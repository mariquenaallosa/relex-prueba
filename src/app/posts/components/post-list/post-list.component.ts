import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  
})
export class PostListComponent implements OnInit {
  // Propiedades del componente
  posts: Post[] = [];
  page: number = 1 ;
  currentPage: number = 1;
  itemsPerPage: number = 1;
  searchTerm: string = '';


// Constructor del componente con inyección de dependencias
  constructor(private postService: PostService,private route : ActivatedRoute ,private router: Router){}


  ngOnInit(): void {
    // Observar cambios en los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
    // Obtener valor de término de búsqueda de la URL
      this.page = params['page'] || 1;
      this.searchTerm = params['searchTerm'] || '';
    // Cargar posts según la configuración actual
      this.loadPosts();
    });
  }
 // Cargar los posts
  loadPosts() {
    this.postService.getPosts(this.page).subscribe((result) => {
       // Actualizar la lista de posts en el componente
      this.posts = result;
      console.log("Posts cargados correctamente: ", this.posts)
    }, err => console.log("Error al cargar los posts: ", err));
  }

  // Manejar cambio de página
  onPageChange(pageNumber: number):void{
    this.page = pageNumber
    this.updateUrl();
    this.loadPosts();
  }

  // Manejar cambios en el término de búsqueda
  onSearchChange(): void {
    // Resetear la página a 1, actualizar la URL y recargar los posts
    this.updateUrl();
    this.loadPosts();
  }

  // Método para actualizar la URL con los parámetros actuales
  updateUrl(): void {
    const queryParams = {
      page: this.page,
      searchTerm: this.searchTerm || null,
    };

    // Actualizar la URL manteniendo otros parámetros de la consulta
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }



}
