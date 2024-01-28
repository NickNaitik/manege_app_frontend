import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOperationComponent } from './master-operation.component';

describe('MasterOperationComponent', () => {
  let component: MasterOperationComponent;
  let fixture: ComponentFixture<MasterOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
