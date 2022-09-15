import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { SubTextComponent } from './sub-text/sub-text.component';



@NgModule({
  declarations: [
    TextComponent,
    SubTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent,
    SubTextComponent
  ]
})
export class ComponentsModule { }
