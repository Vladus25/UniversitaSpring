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
  id!: number;
  datiEsame: any[] = [];
  datiCorsiLaurea: any[] = [];
  datiCorsiProfTutor: any[] = [];
  datiTipoCorsi: any[] = [];
  datiStudenteCorsi: any[] = [];
  datiCorsoEsameProf: any[] = [];

  blocks: any[] = [
    { value: '1', label: 'Ricerca degli esami sostenuti con data e voto di un studente'},
    { value: '2', label: 'Ricerca dei corsi di laurea con numero rispettivo di iscritti'},
    { value: '3', label: 'Ricerca per corso di laurea per vedere offerta formativa'},
    { value: '4', label: 'Ricerca per un corso per vedere informazioni sullo stesso, sul tutor e sul professore'},
    { value: '5', label: 'Ricerca per studente quali corsi segue'},
    { value: '6', label: 'Ricerca per matricola per vedere informazioni sul corso di laurea ed elenco di esami sostenuti con info sul professore che ha tenuto ogni corso'},
  ];

  constructor(private http: ConnectionDBService) { }


  ricercaEsame() {
    this.http.query1(this.matricola).subscribe(data => {
      this.datiEsame = data;
    });
  }

  ricercaCorsiLaurea() {
    this.http.query2().subscribe(data => {
      this.datiCorsiLaurea = data;
    });
  }

  ricercaTipoCorsi() {
    this.http.query3(this.id).subscribe(data => {
      this.datiTipoCorsi = data;
    });
  }

  ricercaCorsoProfTutor() {
    this.http.query4().subscribe(data => {
      this.datiCorsiProfTutor = data;
    });
  }

  ricercaStudenteCorso() {
    this.http.query5(this.matricola).subscribe(data => {
      this.datiStudenteCorsi = data;
    });
  }

  ricercaCorsoEsameProf() {
    this.http.query6(this.matricola).subscribe(data => {
      this.datiCorsoEsameProf = data;
    });
  }

  ngOnInit(): void {
    this.ricercaCorsiLaurea();
    this.ricercaCorsoProfTutor();
  }

}
