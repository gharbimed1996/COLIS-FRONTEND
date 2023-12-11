import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurViewcolisComponent } from './livreur-viewcolis.component';

describe('LivreurViewcolisComponent', () => {
  let component: LivreurViewcolisComponent;
  let fixture: ComponentFixture<LivreurViewcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurViewcolisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreurViewcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
