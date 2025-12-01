import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Doc } from '../../service/doc/doc';

interface Documents {
  id: string;
  title: string;
  category: string;
  description: string;
  size: string;
  format: string;
  icon: string; // ici la classe FontAwesome
  color: string; // couleur principale
}

export interface DocumentItem {
  uid: string;
  type: string;
  titre: string;
  description: string;
  fichierPath: string;   // chemin ou nom du fichier uploadé
}

export interface CategoryStyle {
  icon: string;
  color: string;
}




@Component({
  selector: 'app-document',
  imports: [CommonModule,RouterModule],
  templateUrl: './document.html',
  styleUrl: './document.css'
})
export class Document implements OnInit {


  categories: string[] = [];
  selectedCategory: string = 'Tous';
  data:DocumentItem[]=[]
  constructor(private api:Doc,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getalldoc()
     
  }

  documentsData: Documents[] = [
    { id: '1', title: 'Règlement Intérieur 2024-2025', category: 'Règlements', description: 'Document officiel contenant toutes les règles et procédures de l\'établissement.', size: '2.1 MB', format: 'PDF', icon: 'fas fa-file-pdf', color: '#E74C3C' },
    { id: '2', title: 'Calendrier Scolaire 2024-2025', category: 'Planning', description: 'Calendrier complet avec toutes les dates importantes.', size: '890 KB', format: 'PDF', icon: 'fas fa-calendar-alt', color: '#3498DB' },
    { id: '3', title: 'Liste des Fournitures Scolaires', category: 'Fournitures', description: 'Liste détaillée des fournitures nécessaires par niveau.', size: '1.5 MB', format: 'PDF', icon: 'fas fa-book', color: '#2ECC71' },
    { id: '4', title: 'Guide des Filières Techniques', category: 'Orientation', description: 'Présentation complète des filières techniques avec débouchés.', size: '3.2 MB', format: 'PDF', icon: 'fas fa-graduation-cap', color: '#9B59B6' },
    { id: '5', title: 'Tarifs et Frais Scolaires 2024-2025', category: 'Financier', description: 'Barème détaillé des frais de scolarité et modalités de paiement.', size: '756 KB', format: 'PDF', icon: 'fas fa-file-invoice', color: '#E67E22' },
    { id: '6', title: 'Procédure d\'Inscription', category: 'Admission', description: 'Guide complet pour l\'inscription des nouveaux élèves.', size: '1.8 MB', format: 'PDF', icon: 'fas fa-users', color: '#5D6D7E' }
  ];

  get filteredDocuments(): DocumentItem[] {
    if (this.selectedCategory === 'Tous') return this.data;
    return this.data.filter(doc => doc.type === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getalldoc(){
    this.api.getalldoc().subscribe({
      next:(value:any)=> {
        console.log("mes doc",value)
        this.data =value
        this.categories = [
            'Tous',
            ...Array.from(new Set(this.data.map(item => item.type)))
            ];
        this.cdr.detectChanges();

      },
      error:(err:any)=> {
        console.log("mon erur",err);
        
      },
      complete() {
        console.log("api lancé");
        
      },
    })
  }

  getStyleByCategory(category: string): CategoryStyle {
  switch (category) {

    case 'Règlements':
      return { icon: 'fas fa-file-pdf', color: '#E74C3C' };

    case 'Planning':
      return { icon: 'fas fa-calendar-alt', color: '#3498DB' };

    case 'Fournitures':
      return { icon: 'fas fa-book', color: '#2ECC71' };

    case 'Orientation':
      return { icon: 'fas fa-graduation-cap', color: '#9B59B6' };

    case 'Financier':
      return { icon: 'fas fa-file-invoice', color: '#E67E22' };

    case 'Admission':
      return { icon: 'fas fa-users', color: '#5D6D7E' };

    default:
      return { icon: 'fas fa-file-alt', color: '#7F8C8D' };
  }
}


  downloadDocument(doc: Documents) {
    alert(`Téléchargement de "${doc.title}" en cours...`);
  }

//   downloadFile(path:string) {
//   const link = document.createElement('a');
//   link.href = `http://localhost:8090/uploads/${path}`;
//   link.download = 'doc.pdf'; // Nom du fichier téléchargé
//   link.click();
//   console.log("mon document",link,path)
// }

downloadFile(path: string) {
  const fileUrl = `http://localhost:8090/uploads/${path}`;

  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = path; // Use real file name
  link.target = "_blank"; // optionnel
  link.click();

  console.log("Téléchargement du fichier :", fileUrl);
}

}
