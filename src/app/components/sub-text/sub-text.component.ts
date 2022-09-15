import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'as-sub-text',
  templateUrl: './sub-text.component.html',
  styleUrls: ['./sub-text.component.scss']
})
export class SubTextComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  size!: string;
  @Input()
  variant!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
