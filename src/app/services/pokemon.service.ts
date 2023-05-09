import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../components/pokemon-details/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  } 
}
