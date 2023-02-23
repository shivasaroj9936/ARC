import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStaffMemberComponent } from './add-new-staff-member.component';

describe('AddNewStaffMemberComponent', () => {
  let component: AddNewStaffMemberComponent;
  let fixture: ComponentFixture<AddNewStaffMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStaffMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
