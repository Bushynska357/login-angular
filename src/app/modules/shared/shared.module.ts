import { NgModule } from '@angular/core';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    AbilityModule
  ],
  declarations: [],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ],
  exports: [AbilityModule]
})
export class SharedModule {
 }
