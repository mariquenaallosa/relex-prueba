import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  // Obtener posts con paginación y filtrado por título
  getPosts(page:number, searchTerm?:string): Observable<Post[]> {
    let params = new HttpParams()
    params = params.append('page', page.toString());

    if(searchTerm){
      params = params.set('title', searchTerm)
    }

    // Realizar solicitud HTTP GET a la API JSONPlaceholder
    return this.http.get<Post[]>(this.apiUrl, {params});
  }

  // Obtener por id
  // getPostById(id: number): Observable<Post> {
  //   return this.http.get<Post>(`${this.apiUrl}/${id}`);
  // }

  // Crear nuevo post
  createPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, newPost);
  }

  // Actualizar un post
  // updatePost(updatedPost: Post): Observable<Post> {
  //   const url = ` ${this.apiUrl}/${updatedPost.id}`
  //   return this.http.put<Post>(url, updatedPost);
  // }

  // Eliminar Post
  // deletePost(postId: number): Observable<void> {
  //   const url = `${this.apiUrl}/${postId}`;
  //   return this.http.delete<void>(url);
  // }

}
