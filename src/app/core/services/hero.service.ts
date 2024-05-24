import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'https://tour-of-heroes-front-angular-default-rtdb.firebaseio.com/heroes.json'
  constructor(private messagesService: MessagesService, private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHero(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
