import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiToggleOptionComponent } from './multi-toggle-option.component';

describe('MultiToggleOptionComponent', () => {
  let component: MultiToggleOptionComponent;
  let fixture: ComponentFixture<MultiToggleOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiToggleOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiToggleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
