import {NgModule} from '@angular/core';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';

export {
  HeroService,
  MessageService
};
@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        HeroService,
        MessageService
      ]
    };
  }
}
