import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintManagementComponent } from './clint-management.component';

describe('ClintManagementComponent', () => {
  let component: ClintManagementComponent;
  let fixture: ComponentFixture<ClintManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
