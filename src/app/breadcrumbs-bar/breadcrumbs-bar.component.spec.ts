import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsBarComponent } from './breadcrumbs-bar.component';

describe('BreadcrumbsBarComponent', () => {
  let component: BreadcrumbsBarComponent;
  let fixture: ComponentFixture<BreadcrumbsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
