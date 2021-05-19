import { NgModule } from '@angular/core';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
import { CommonModule } from '@angular/common';
import { InputTaskComponent } from './components/input-task/input-task.component';



@NgModule({
  imports: [
    AbilityModule
  ],
  declarations: [InputTaskComponent],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [AbilityModule, InputTaskComponent]
})
export class SharedModule {
 }
