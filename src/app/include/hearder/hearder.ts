import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hearder',
  imports: [CommonModule,RouterModule],
  templateUrl: './hearder.html',
  styleUrl: './hearder.css'
})
export class Hearder {

  isMobileMenuOpen = false;
  currentPage = 'acceuil';

  menuItems = [
    { id: 'acceuil', label: 'Accueil', path: '/page/acceuil' },
    { id: 'apropos', label: 'À propos', path: '/page/apropos' },
    { id: 'classes', label: 'Nos Classes', path: '/page/classes' },
    { id: 'enseignants', label: 'Enseignants', path: '/page/proffesseur' },
    { id: 'actualites', label: 'Actualités', path: '/page/infos' },
    { id: 'documents', label: 'Documents', path: '/page/document' },
    { id: 'contact', label: 'Contact', path: '/page/contact' },
  ];

  constructor(private router: Router) {}

  handlePageChange(pageId: string, path: string) {
    this.currentPage = pageId;
    this.isMobileMenuOpen = false;
    this.router.navigate([path]);
    console.log("ppaa");
    
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
