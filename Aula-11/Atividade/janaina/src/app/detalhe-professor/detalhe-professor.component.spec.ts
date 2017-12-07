import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProfessorComponent } from './detalhe-professor.component';

describe('DetalheAlunoComponent', () => {
  let component: DetalheProfessorComponent;
  let fixture: ComponentFixture<DetalheProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
