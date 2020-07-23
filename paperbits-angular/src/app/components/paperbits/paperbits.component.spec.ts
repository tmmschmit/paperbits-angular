import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperbitsComponent } from './paperbits.component';

describe('PaperbitsComponent', () => {
  let component: PaperbitsComponent;
  let fixture: ComponentFixture<PaperbitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperbitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
