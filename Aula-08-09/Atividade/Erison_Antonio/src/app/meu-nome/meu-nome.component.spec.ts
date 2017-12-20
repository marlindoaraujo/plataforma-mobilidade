import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuNomeComponent } from './meu-nome.component';

describe('MeuNomeComponent', () => {
  let component: MeuNomeComponent;
  let fixture: ComponentFixture<MeuNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
