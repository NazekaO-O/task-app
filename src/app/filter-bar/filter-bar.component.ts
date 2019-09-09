import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickEvent(event){
    event.target.classList.toggle('filter__head--hide');
    event.target.parentElement.children[1].classList.toggle('filter__list--show');
  }
}
