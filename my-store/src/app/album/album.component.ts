import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  title = 'album-component';
  album = {
    title: 'album title',
    artist: 'album artist',
    year: 'album year',
  };
  constructor() { }
}
