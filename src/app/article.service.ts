import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private getArticlesURL = 'http://localhost:5000/articles';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http
      .get<Article[]>(this.getArticlesURL)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}
