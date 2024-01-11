import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMatchComponent } from './smart-match.component';

describe('SmartMatchComponent', () => {
  let component: SmartMatchComponent;
  let fixture: ComponentFixture<SmartMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
