import { NgModule } from '@angular/core';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
import { CommonModule } from '@angular/common';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { AutofocusDirective } from './autofocus.directive';
import { TextPipe } from 'src/app/text.pipe';



@NgModule({
  imports: [
    AbilityModule
  ],
  declarations: [InputTaskComponent, AutofocusDirective, TextPipe],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [AbilityModule, InputTaskComponent, AutofocusDirective]
})
export class SharedModule {
 }
