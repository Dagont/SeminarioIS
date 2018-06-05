import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMenuComponent } from './ver-menu.component';

describe('VerMenuComponent', () => {
  let component: VerMenuComponent;
  let fixture: ComponentFixture<VerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
