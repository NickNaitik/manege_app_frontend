import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerOperationComponent } from './saler-operation.component';

describe('SalerOperationComponent', () => {
  let component: SalerOperationComponent;
  let fixture: ComponentFixture<SalerOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalerOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalerOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
