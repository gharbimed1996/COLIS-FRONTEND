import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLivreurComponent } from './registerLivreur.component';

describe('RegisterComponent', () => {
  let component: RegisterLivreurComponent;
  let fixture: ComponentFixture<RegisterLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
