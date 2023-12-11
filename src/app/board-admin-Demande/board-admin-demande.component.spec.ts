import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminDemandeComponent } from './board-admin-demande.component';

describe('BoardAdminComponent', () => {
  let component: BoardAdminDemandeComponent;
  let fixture: ComponentFixture<BoardAdminDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
