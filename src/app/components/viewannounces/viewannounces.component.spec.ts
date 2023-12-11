import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewannouncesComponent } from './viewannounces.component';

describe('ViewannouncesComponent', () => {
  let component: ViewannouncesComponent;
  let fixture: ComponentFixture<ViewannouncesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewannouncesComponent]
    });
    fixture = TestBed.createComponent(ViewannouncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
