import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../translation.service';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
