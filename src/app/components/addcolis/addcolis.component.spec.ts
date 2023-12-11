import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addcolisComponent } from './addcolis.component';

describe('AddcolisComponent', () => {
  let component: addcolisComponent;
  let fixture: ComponentFixture<addcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addcolisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
