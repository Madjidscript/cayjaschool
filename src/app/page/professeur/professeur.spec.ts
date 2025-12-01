import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Professeur } from './professeur';

describe('Professeur', () => {
  let component: Professeur;
  let fixture: ComponentFixture<Professeur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Professeur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Professeur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
