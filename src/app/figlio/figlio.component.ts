import { Component, Input } from '@angular/core';
import { Animale } from '../modelli/animale.model';

@Component({
selector: 'app-animale',
templateUrl: './figlio.component.html',
styleUrls: ['./figlio.component.css']
})
export class AnimaleComponent {
@Input() animale: Animale;
}
