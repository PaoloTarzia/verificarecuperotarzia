import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaleComponent } from './figlio.component';

describe('FiglioComponent', () => {
  let component: AnimaleComponent;
  let fixture: ComponentFixture<AnimaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
