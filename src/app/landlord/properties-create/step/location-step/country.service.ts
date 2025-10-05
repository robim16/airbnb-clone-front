import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { State } from '../../../../core/model/state.model';
import { Country } from './country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  http: HttpClient = inject(HttpClient)

  private countries$: WritableSignal<State<Array<Country>>> = 
    signal(State.Builder<Array<Country>>().forInit())
  countries = computed(() => this.countries$())

  private fetchCountry$ = new Observable<Array<Country>>()

  constructor() { 
    this.initFetchGetAllCountries()
  }

  initFetchGetAllCountries(): void {
    this.fetchCountry$ = this.http.get<Array<Country>>("/assets/countries.json")
      .pipe(
        tap(countries =>
          this.countries$.set(State.Builder<Array<Country>>().forSuccess(countries))),
        catchError(err => {
          this.countries$.set(State.Builder<Array<Country>>().forError(err));
          return of(err);
        }),
        shareReplay(1)
      );
  }
}
