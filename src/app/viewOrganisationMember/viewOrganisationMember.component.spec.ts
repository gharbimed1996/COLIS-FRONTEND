import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganisationMemberComponent } from './viewOrganisationMember.component';

describe('ViewproductsbycategorieComponent', () => {
  let component: ViewOrganisationMemberComponent;
  let fixture: ComponentFixture<ViewOrganisationMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrganisationMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrganisationMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
