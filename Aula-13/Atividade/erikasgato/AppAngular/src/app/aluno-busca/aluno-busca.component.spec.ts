import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoBuscaComponent } from './aluno-busca.component';

describe('AlunoBuscaComponent', () => {
  let component: AlunoBuscaComponent;
  let fixture: ComponentFixture<AlunoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
