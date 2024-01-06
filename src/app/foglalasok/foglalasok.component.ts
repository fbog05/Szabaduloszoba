import { Component, OnInit } from '@angular/core';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-foglalas-lista',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css'],
})
export class FoglalasokComponent implements OnInit {
  foglalasok: any[] = [];
  displayedColumns: string[] = ['id', 'nev', 'iranyitoszam', 'cim', 'datum', 'fo'];

  constructor(private foglalasService: FoglalasService) { }

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.foglalasService.getFoglalasok().subscribe({
      next: (data) => {
        console.log('Foglalások:', data);
        this.foglalasok = data;
      },
      error: (error) => {
        console.error('Hiba történt a foglalások lekérése során:', error);
      }
    });
  }
}

