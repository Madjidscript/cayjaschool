import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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


@Component({
  selector: 'app-document',
  imports: [CommonModule,RouterModule],
  templateUrl: './document.html',
  styleUrl: './document.css'
})
export class Document {


  categories: string[] = ['Tous', 'Règlements', 'Planning', 'Fournitures', 'Orientation', 'Financier', 'Admission', 'Activités'];
  selectedCategory: string = 'Tous';

  documentsData: Documents[] = [
    { id: '1', title: 'Règlement Intérieur 2024-2025', category: 'Règlements', description: 'Document officiel contenant toutes les règles et procédures de l\'établissement.', size: '2.1 MB', format: 'PDF', icon: 'fas fa-file-pdf', color: '#E74C3C' },
    { id: '2', title: 'Calendrier Scolaire 2024-2025', category: 'Planning', description: 'Calendrier complet avec toutes les dates importantes.', size: '890 KB', format: 'PDF', icon: 'fas fa-calendar-alt', color: '#3498DB' },
    { id: '3', title: 'Liste des Fournitures Scolaires', category: 'Fournitures', description: 'Liste détaillée des fournitures nécessaires par niveau.', size: '1.5 MB', format: 'PDF', icon: 'fas fa-book', color: '#2ECC71' },
    { id: '4', title: 'Guide des Filières Techniques', category: 'Orientation', description: 'Présentation complète des filières techniques avec débouchés.', size: '3.2 MB', format: 'PDF', icon: 'fas fa-graduation-cap', color: '#9B59B6' },
    { id: '5', title: 'Tarifs et Frais Scolaires 2024-2025', category: 'Financier', description: 'Barème détaillé des frais de scolarité et modalités de paiement.', size: '756 KB', format: 'PDF', icon: 'fas fa-file-invoice', color: '#E67E22' },
    { id: '6', title: 'Procédure d\'Inscription', category: 'Admission', description: 'Guide complet pour l\'inscription des nouveaux élèves.', size: '1.8 MB', format: 'PDF', icon: 'fas fa-users', color: '#5D6D7E' }
  ];

  get filteredDocuments(): Documents[] {
    if (this.selectedCategory === 'Tous') return this.documentsData;
    return this.documentsData.filter(doc => doc.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  downloadDocument(doc: Documents) {
    alert(`Téléchargement de "${doc.title}" en cours...`);
  }

}
