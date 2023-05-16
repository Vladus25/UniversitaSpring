import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent {
  studenti: any;

  constructor(private http: ConnectionDBService) { }

  ngOnInit(): void {
    this.http.getAllStudenti().subscribe(data => {
      this.studenti = data;
    });
  }
}
