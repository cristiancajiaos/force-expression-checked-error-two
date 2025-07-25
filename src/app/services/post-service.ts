import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
