import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{
  pokemon: Pokemon = {} as Pokemon;
  pokemonId: number = 1;
  maxRecords: number = 1010;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void{
    this.loadPokemon();
  }

  loadPokemon(): void{
    this.pokemonService.getPokemon(this.pokemonId).subscribe(
      {
        next : pokemon => this.pokemon = pokemon
      }
    );
  }

  previousPokemon(){
    if (this.pokemonId === 1){
      this.pokemonId = this.maxRecords;
    }
    else{
      this.pokemonId--;
    }
    this.loadPokemon();
  }

  nextPokemon(){
    if (this.pokemonId === this.maxRecords){
      this.pokemonId = 1;
    }
    else{
      this.pokemonId++;
    }
    this.loadPokemon();
  }

  getPokemonPhoto(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
  }

  getPokemonAbilities(){
    return this.pokemon.abilities.map(a => a.ability.name).join(', ');
  }

  convertHeightToMeters(){
    return this.pokemon.height / 10 + 'm';
  }

  convertWeightToKg(){
    return this.pokemon.weight / 10 + 'kg';
  }

  formatPokemonId(id : number){
    return id.toString().padStart(3, '0');
  }  
}
