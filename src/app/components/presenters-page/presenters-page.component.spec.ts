import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentersPageComponent } from './presenters-page.component';

describe('PresentersPageComponent', () => {
  let component: PresentersPageComponent;
  let fixture: ComponentFixture<PresentersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
