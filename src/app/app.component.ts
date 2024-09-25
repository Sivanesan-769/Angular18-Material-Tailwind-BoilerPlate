import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './common/util/material-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BoilerPlate-18';
}
