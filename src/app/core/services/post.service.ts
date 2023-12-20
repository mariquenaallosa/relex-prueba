import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(page: number, searchTerm?: string): Observable<Post[]> {
    let params = new HttpParams().append('page', page.toString());

    if (searchTerm) {
      params = params.set('title', searchTerm);
    }

    return this.http.get<Post[]>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  createPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, newPost).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido'; 

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código: ${error.status}, Mensaje: ${error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}