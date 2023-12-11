import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcolisComponent } from './viewcolis.component';

describe('ViewcolisComponent', () => {
  let component: ViewcolisComponent;
  let fixture: ComponentFixture<ViewcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcolisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
