import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet, UrlSegment } from '@angular/router';
import { routes } from './app.routes';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  routes = signal(routes);
  activeRoute = inject(ActivatedRoute);

  lightTheme = signal(false);


  toggleTheme() { 
    this.lightTheme.update(value => !value);       
  }
}
