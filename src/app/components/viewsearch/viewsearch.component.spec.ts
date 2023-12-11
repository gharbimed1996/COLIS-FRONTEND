import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsearchComponent } from './viewsearch.component';

describe('ViewsearchComponent', () => {
  let component: ViewsearchComponent;
  let fixture: ComponentFixture<ViewsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsearchComponent]
    });
    fixture = TestBed.createComponent(ViewsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
