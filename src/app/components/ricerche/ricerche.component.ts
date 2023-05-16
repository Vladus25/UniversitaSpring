import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-ricerche',
  templateUrl: './ricerche.component.html',
  styleUrls: ['./ricerche.component.css']
})
export class RicercheComponent {
  selectedOption!: string;
  matricola!: number;
  datiEsame: any[] = [];
  constructor(private http: ConnectionDBService) { }

  blocks: any[] = [
    { value: '1', label: 'Ricerca 1'},
    { value: '2', label: 'Ricerca 2'},
    { value: '3', label: 'Ricerca 3'},
    { value: '4', label: 'Ricerca 4'},
    { value: '5', label: 'Ricerca 5'},
    { value: '6', label: 'Ricerca 6'},
  ];

  ricercaEsame() {
    this.http.query1(this.matricola)
      .subscribe(data => {
        this.datiEsame = data;
      });
  }
}
