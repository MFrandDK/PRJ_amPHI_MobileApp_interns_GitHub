import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaardprocesserSkeletonComponent } from './vaardprocesser-skeleton.component';

describe('VaardprocesserSkeletonComponent', () => {
  let component: VaardprocesserSkeletonComponent;
  let fixture: ComponentFixture<VaardprocesserSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaardprocesserSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaardprocesserSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
