import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardRoutsComponent } from './wild-card-routs.component';

describe('WildCardRoutsComponent', () => {
  let component: WildCardRoutsComponent;
  let fixture: ComponentFixture<WildCardRoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardRoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardRoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
