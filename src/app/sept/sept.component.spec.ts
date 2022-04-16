import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptComponent } from './sept.component';

describe('SeptComponent', () => {
  let component: SeptComponent;
  let fixture: ComponentFixture<SeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
