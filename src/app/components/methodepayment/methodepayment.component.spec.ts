import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodepaymentComponent } from './methodepayment.component';

describe('MethodepaymentComponent', () => {
  let component: MethodepaymentComponent;
  let fixture: ComponentFixture<MethodepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodepaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
