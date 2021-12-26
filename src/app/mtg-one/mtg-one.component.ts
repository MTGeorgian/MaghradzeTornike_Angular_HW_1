import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtg-one',
  templateUrl: './mtg-one.component.html',
  styleUrls: ['./mtg-one.component.scss']
})
export class MtgOneComponent implements OnInit {

  mtgVariable = 'Tornike Maghradze.';
  mtgAngular = 'mtg: Hello Angular.';

  constructor() { }

  ngOnInit(): void {
  }

}
