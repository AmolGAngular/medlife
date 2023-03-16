import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsHeaderComponent } from './top-deals-header.component';

describe('TopDealsHeaderComponent', () => {
  let component: TopDealsHeaderComponent;
  let fixture: ComponentFixture<TopDealsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
