import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCustomersComponent } from './check-customers.component';

describe('CheckCustomersComponent', () => {
  let component: CheckCustomersComponent;
  let fixture: ComponentFixture<CheckCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
