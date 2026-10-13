import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Middle } from './middle';
import { provideRouter } from '@angular/router';

describe('Middle', () => {
  let component: Middle;
  let fixture: ComponentFixture<Middle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middle],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Middle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
