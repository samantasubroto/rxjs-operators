import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comment, Comments } from 'src/model/common.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(protected https: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.https.get<Comment[]>(this.url);
  }
}
