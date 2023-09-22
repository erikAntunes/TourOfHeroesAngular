import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'http://localhost:3000/heroes'
  constructor(private messagesService: MessagesService, private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
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
