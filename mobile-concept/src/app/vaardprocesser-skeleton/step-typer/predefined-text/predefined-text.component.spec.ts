import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedTextComponent } from './predefined-text.component';

describe('PredefinedTextComponent', () => {
  let component: PredefinedTextComponent;
  let fixture: ComponentFixture<PredefinedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredefinedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredefinedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
