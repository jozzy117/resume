import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-ui',
  templateUrl: './button-ui.component.html',
  styleUrls: ['./button-ui.component.css']
})
export class ButtonUiComponent implements OnInit {
  @Input() name: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
