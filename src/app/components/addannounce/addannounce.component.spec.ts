import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannounceComponent } from './addannounce.component';

describe('AddannounceComponent', () => {
  let component: AddannounceComponent;
  let fixture: ComponentFixture<AddannounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddannounceComponent]
    });
    fixture = TestBed.createComponent(AddannounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
