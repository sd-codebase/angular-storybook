import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'as-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input()
  title!: string;
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
