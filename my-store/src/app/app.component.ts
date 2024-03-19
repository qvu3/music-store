import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongComponent } from "./song/song.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SongComponent]
})
export class AppComponent {
  title = 'my-store';
}
