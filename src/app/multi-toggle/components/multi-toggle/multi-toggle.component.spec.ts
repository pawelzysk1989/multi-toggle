import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiToggleComponent } from './multi-toggle.component';

describe('MultiToggleComponent', () => {
  let component: MultiToggleComponent;
  let fixture: ComponentFixture<MultiToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
