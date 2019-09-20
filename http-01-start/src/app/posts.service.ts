import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({providedIn: 'root'})
export class PostsService {
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-c658a.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.errorSubject.next(error.message);
      });
  }

  fetchPosts() {
    return this.http.get<{[key: string]: Post }>('https://ng-complete-guide-c658a.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-c658a.firebaseio.com/posts.json');
  }
}
