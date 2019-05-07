import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSpecsComponent } from './place-specs.component';

describe('PlaceSpecsComponent', () => {
  let component: PlaceSpecsComponent;
  let fixture: ComponentFixture<PlaceSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
