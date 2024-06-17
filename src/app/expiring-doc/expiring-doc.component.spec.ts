import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringDocComponent } from './expiring-doc.component';

describe('ExpiringDocComponent', () => {
  let component: ExpiringDocComponent;
  let fixture: ComponentFixture<ExpiringDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpiringDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpiringDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
