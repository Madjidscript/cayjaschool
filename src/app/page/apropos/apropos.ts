import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Achievement {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-apropos',
  imports: [CommonModule,RouterModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css'
})
export class Apropos implements OnInit {

   achievements: Achievement[] = [];

  constructor() { }

  ngOnInit(): void {
    this.achievements = [
      { year: '2023', title: 'Meilleure école technique de la région', description: 'Récompense pour l\'excellence de nos programmes techniques' },
      { year: '2022', title: '95% de taux de réussite au Baccalauréat', description: 'Performance exceptionnelle de nos élèves' },
      { year: '2021', title: 'Certification ISO 9001', description: 'Reconnaissance de la qualité de notre système éducatif' },
    ];
  }


}
