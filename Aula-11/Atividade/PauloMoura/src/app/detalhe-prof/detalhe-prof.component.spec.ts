import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProfComponent } from './detalhe-prof.component';

describe('DetalheProfComponent', () => {
  let component: DetalheProfComponent;
  let fixture: ComponentFixture<DetalheProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
