import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaardprocesDetailComponent } from './step-typer.component';

describe('VaardprocesDetailComponent', () => {
  let component: VaardprocesDetailComponent;
  let fixture: ComponentFixture<VaardprocesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaardprocesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaardprocesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
