import { Component } from '@angular/core';
import { Animale } from './modelli/animale.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  animali:Animale[]
  constructor(){
    this.animali = [
      {
         "nome": "cane",
         "verso": "bau",
         "zampe": 4,
         "movimento": "cammina"
      },
      {
         "nome": "rana",
         "verso": "cra",
         "zampe": 4,
         "movimento": "salta"
      },
      {
         "nome": "canarino",
         "verso": "fiu",
         "zampe": 2,
         "movimento": "vola"
      },
      {
         "nome": "serpente",
         "verso": "fss",
         "zampe": 0,
         "movimento": "striscia"
      }
   ]
   
  }

  sortedAnimale(): Animale[] {
    return this.animali = this.animali.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  stampArrayZampe(){
    this.animali.sort((a,b) => a.zampe - b.zampe )
  }
}
