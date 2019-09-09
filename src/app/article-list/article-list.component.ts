import { Component, OnInit } from '@angular/core';
import {articles} from '../articles';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles = articles;
  constructor() { }

  ngOnInit() {
  }
  addRemoveRedClass(event){
    let elements = document.getElementsByClassName("articles__tab");
    for (const el of Array.from(elements)) {
      el.classList.remove('articles__tab--active');
    }
    event.target.classList.add('articles__tab--active');
  }
}
