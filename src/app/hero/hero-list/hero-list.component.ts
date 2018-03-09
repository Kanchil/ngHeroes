import { Component, OnInit } from '@angular/core';
import {Hero} from '../../domain';
import {HeroService} from '../../services';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
  }

  ngOnInit() {
    this.getHeroes();
  }

}
