import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteMovieDialogComponent } from './confirm-delete-movie-dialog.component';

describe('ConfirmDeleteMovieDialogComponent', () => {
  let component: ConfirmDeleteMovieDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteMovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteMovieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
