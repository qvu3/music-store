import { Component } from '@angular/core';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  title = 'song-component';
  song = {
    title: 'song title',
    artist: 'song artist',
    album: 'song album',
    year: 'song year',
  };
  constructor() { }
}
