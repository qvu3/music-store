import { Component } from '@angular/core';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  title = 'artist-component';
  artist = {
    name: 'artist name',
    genre: 'artist genre',
    label: 'artist label',
    year: 'artist year',
  };
  constructor() { }
}
