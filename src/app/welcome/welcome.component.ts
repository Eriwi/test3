import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from "../article";

//import { AuthService } from '../auth.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  articleSub: Subscription;
  articles: Article[];
  error: any;

  constructor(
    public articleService: ArticleService,
//    public authService: AuthService
  ) {}

  ngOnInit() {
    this.articleSub = this.articleService
      .getArticles()
      .subscribe(
        articles => this.articles = articles,
        err => this.error = err
      );
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }

}
