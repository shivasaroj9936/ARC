import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringingManagementComponent } from './earinging-management.component';

describe('EaringingManagementComponent', () => {
  let component: EaringingManagementComponent;
  let fixture: ComponentFixture<EaringingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaringingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
