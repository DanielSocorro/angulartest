 import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{

  name!: string;
  urlImage!: string


  constructor(private pokemonService : PokemonService) {}

  ngOnInit(): void {
  }

  search() {
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
     this.urlImage = data.sprites.front_default
    })
  }
}
