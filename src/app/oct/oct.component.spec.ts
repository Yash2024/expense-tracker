import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctComponent } from './oct.component';

describe('OctComponent', () => {
  let component: OctComponent;
  let fixture: ComponentFixture<OctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
