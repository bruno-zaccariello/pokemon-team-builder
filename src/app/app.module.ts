import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PartyComponent } from './components/party/party.component';
import { PokemonViewerComponent } from './components/pokemon-viewer/pokemon-viewer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PartyComponent,
    PokemonViewerComponent,
  ],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
