import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritextComponent } from './fritext.component';

describe('FritextComponent', () => {
  let component: FritextComponent;
  let fixture: ComponentFixture<FritextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
