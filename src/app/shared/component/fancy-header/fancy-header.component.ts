import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-header',
  templateUrl: './fancy-header.component.html',
  styleUrls: ['./fancy-header.component.css']
})
export class FancyHeaderComponent implements OnInit {
  @Input() name:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
