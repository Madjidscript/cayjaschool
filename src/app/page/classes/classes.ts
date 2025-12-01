import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Modal } from '../../include/modal/modal';
import { Classeservice } from '../../service/classeservice/classeservice';

interface ClassData {
  uid: string;
  nom: string;
  nbreFille: number;
  nbreGarcon: number;
  type: string;
  professeurPrincipal: string;
  nomprof: string;
  prenomprof: string;
  numeroprof: string;
  emailprof: string;
  matiereprof: string;
  diplomeprof: string;
  total?: number;
  doc_path:string;
}

@Component({
  selector: 'app-classes',
  imports: [CommonModule, RouterModule, Modal],
  templateUrl: './classes.html',
  styleUrl: './classes.css'
})
export class Classes {
  constructor(private api: Classeservice,private cdr: ChangeDetectorRef) {}

  classesData: ClassData[] = [];
  groupedClasses: Record<string, ClassData[]> = {};
  levels: string[] = [];
  selectedClass: ClassData | null = null;
  isModalOpen: boolean = false;

  levelColors: Record<string, string> = {
    '6ème': 'level-purple',
    '5ème': 'level-pink',
    '4ème': 'level-indigo',
    '3ème': 'level-blue',
    '2nde': 'level-green',
    '1ère': 'level-yellow',
    'Terminale': 'level-red',
    'generale': 'level-blue', // pour les types comme "generale" ou "technique"
    'technique': 'level-green'
  };

  ngOnInit(): void {
    this.getallclasse();
  }

  getallclasse() {
    this.api.getallclasse().subscribe({
      next: (res:any) => {
        // ✅ ajoute le total automatiquement
        this.classesData = res.map((c:any) => ({
          ...c,
          total: c.nbreFille + c.nbreGarcon
        }));

        // ✅ groupe les classes par "type" (ou par niveau si tu veux)
        this.groupedClasses = this.classesData.reduce((acc, classItem) => {
          const key = classItem.type || 'Autre';
          if (!acc[key]) acc[key] = [];
          acc[key].push(classItem);
          return acc;
        }, {} as Record<string, ClassData[]>);

        this.levels = Object.keys(this.groupedClasses);
        console.log('Classes regroupées :', this.groupedClasses);
              this.cdr.detectChanges();

      },
      error: (err: any) => {
        console.error('Erreur API :', err);
      },
      complete: () => {
        console.log('Chargement des classes terminé.');
      }
    });
  }

  openModal(classItem: ClassData): void {
    this.selectedClass = classItem;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedClass = null;
  }
}
