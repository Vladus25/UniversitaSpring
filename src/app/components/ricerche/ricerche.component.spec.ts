import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercheComponent } from './ricerche.component';

describe('RicercheComponent', () => {
  let component: RicercheComponent;
  let fixture: ComponentFixture<RicercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
