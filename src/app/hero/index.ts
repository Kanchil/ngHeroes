import {NgModule} from '@angular/core';
import {HeroRoutingModule} from './hero-routing.module';
import {HeroListComponent} from './hero-list/hero-list.component';

@NgModule({
  imports: [
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
