import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiToggleTemplateComponent } from './multi-toggle-template.component';

describe('MultiToggleTemplateComponent', () => {
  let component: MultiToggleTemplateComponent;
  let fixture: ComponentFixture<MultiToggleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiToggleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiToggleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
