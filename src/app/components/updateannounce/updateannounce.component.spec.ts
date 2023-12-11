import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateannounceComponent } from './updateannounce.component';

describe('UpdateannounceComponent', () => {
  let component: UpdateannounceComponent;
  let fixture: ComponentFixture<UpdateannounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateannounceComponent]
    });
    fixture = TestBed.createComponent(UpdateannounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
