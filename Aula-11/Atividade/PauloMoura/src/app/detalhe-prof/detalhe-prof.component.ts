import { Component, OnInit , Input} from '@angular/core';
import {Professor} from '../professor/prof';

@Component({
  selector: 'app-detalhe-prof',
  templateUrl: './detalhe-prof.component.html',
  styleUrls: ['./detalhe-prof.component.css']
})
export class DetalheProfComponent implements OnInit {

  @Input() Professor : Professor;
  constructor() { }

  ngOnInit() {
  }

}
