import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanetDialogComponent } from './create-planet-dialog.component';

describe('CreatePlanetDialogComponent', () => {
  let component: CreatePlanetDialogComponent;
  let fixture: ComponentFixture<CreatePlanetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlanetDialogComponent]
    });
    fixture = TestBed.createComponent(CreatePlanetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
