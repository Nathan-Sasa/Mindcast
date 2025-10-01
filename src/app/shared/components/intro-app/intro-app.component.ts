import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeInDelay, fadeInDelayXl } from '../../../animation/animation';

@Component({
  selector: 'app-intro-app',
  imports: [RouterModule],
  templateUrl: './intro-app.component.html',
  styleUrl: './intro-app.component.css',
  animations: [fadeInDelay, fadeInDelayXl]
})
export class IntroAppComponent {

}
