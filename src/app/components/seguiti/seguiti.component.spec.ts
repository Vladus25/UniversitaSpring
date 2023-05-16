import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguitiComponent } from './seguiti.component';

describe('SeguitiComponent', () => {
  let component: SeguitiComponent;
  let fixture: ComponentFixture<SeguitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
