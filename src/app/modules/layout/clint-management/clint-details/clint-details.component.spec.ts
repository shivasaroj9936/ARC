import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintDetailsComponent } from './clint-details.component';

describe('ClintDetailsComponent', () => {
  let component: ClintDetailsComponent;
  let fixture: ComponentFixture<ClintDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
