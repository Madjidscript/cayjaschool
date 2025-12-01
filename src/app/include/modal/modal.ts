import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
export interface ClassDetails {
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
  selector: 'app-modal',
  imports: [CommonModule ,RouterModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  @Input() classDetails: ClassDetails | null = null;
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }

  handleDownload() {
   if (!this.classDetails || !this.classDetails.doc_path) {
    alert("Aucun fichier disponible");
    return;
  }

   const url = `http://localhost:8090/uploads/${this.classDetails.doc_path}`;
  // window.open(url, '_blank'); // ouvre et télécharge automatiquement si c'est un PDF/image/etc.

   const a = document.createElement('a');
  a.href = url;
  a.download = this.classDetails.doc_path; // force le téléchargement
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

   }

  downloadFile() {
  const link = document.createElement('a');
  link.href = `http://localhost:8090/uploads/${this?.classDetails?.doc_path}`;
  link.download = 'emploitemp.pdf'; // Nom du fichier téléchargé
  link.target = "_blank"; // optionnel
  link.click();
}

}
