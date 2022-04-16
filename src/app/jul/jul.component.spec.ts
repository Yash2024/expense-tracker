import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulComponent } from './jul.component';

describe('JulComponent', () => {
  let component: JulComponent;
  let fixture: ComponentFixture<JulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
