import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workexp } from './role';

describe('Workexp', () => {
  let component: Workexp;
  let fixture: ComponentFixture<Workexp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workexp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workexp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
