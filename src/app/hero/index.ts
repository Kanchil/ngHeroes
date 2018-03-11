import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HeroRoutingModule} from './hero-routing.module';
import {HeroListComponent} from './hero-list/hero-list.component';

@NgModule({
  imports: [
    SharedModule,
    HeroRoutingModule
  ],
  exports: [HeroListComponent],
  entryComponents: [HeroListComponent],
  declarations: [
    HeroListComponent
  ]
})
export class HeroModule {
}
