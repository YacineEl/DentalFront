import {Component, Input} from '@angular/core';
import {Act} from "../../models/act.model";

@Component({
  selector: 'app-act-list',
  templateUrl: './act-list.component.html',
  styleUrl: './act-list.component.css'
})
export class ActListComponent {
  @Input() actList: Act[]= [];

  numberActs: number = 3;
}

