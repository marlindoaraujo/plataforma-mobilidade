import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAlunoComponent } from './detalhe-aluno.component';

describe('DetalheAlunoComponent', () => {
  let component: DetalheAlunoComponent;
  let fixture: ComponentFixture<DetalheAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
