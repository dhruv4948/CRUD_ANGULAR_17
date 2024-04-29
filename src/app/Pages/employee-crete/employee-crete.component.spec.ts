import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreteComponent } from './employee-crete.component';

describe('EmployeeCreteComponent', () => {
  let component: EmployeeCreteComponent;
  let fixture: ComponentFixture<EmployeeCreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeCreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
