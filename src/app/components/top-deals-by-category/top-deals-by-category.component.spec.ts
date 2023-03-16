import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsByCategoryComponent } from './top-deals-by-category.component';

describe('TopDealsByCategoryComponent', () => {
  let component: TopDealsByCategoryComponent;
  let fixture: ComponentFixture<TopDealsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
