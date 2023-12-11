import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseViewdemandeComponent } from './entreprise-viewdemande.component';

describe('EntrepriseViewdemandeComponent', () => {
  let component: EntrepriseViewdemandeComponent;
  let fixture: ComponentFixture<EntrepriseViewdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseViewdemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseViewdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
