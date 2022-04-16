import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugComponent } from './aug.component';

describe('AugComponent', () => {
  let component: AugComponent;
  let fixture: ComponentFixture<AugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
