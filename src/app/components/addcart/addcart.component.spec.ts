import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addcartComponent } from './addcart.component';

describe('AddcartComponent', () => {
  let component: addcartComponent;
  let fixture: ComponentFixture<addcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
