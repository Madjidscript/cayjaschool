import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Actualité } from '../../service/actualité/actualité';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
  icon: string;   // ici ce sera une classe CSS FontAwesome
}
 

export interface NewsItems {
  uid: string;           // uid
  titre: string;        // titre
  typeActivite: string;     // typeActivite
  date_publication: string;         // date_publication
  description: string;      // description
  icon: string;         // classe CSS FontAwesome
  images?: string[];    // optionnel si tu veux garder la liste d'images
}


@Component({
  selector: 'app-infos',
  imports: [CommonModule ,ReactiveFormsModule,RouterModule],
  templateUrl: './infos.html',
  styleUrl: './infos.css'
})
export class Infos implements OnInit{

  constructor(private api:Actualité,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getallactualite()
    this.categories = [
  'Tous',
  ...Array.from(new Set(this.data.map(item => item.typeActivite)))
];
  }
   
  data:NewsItems[]=[]
  categories: string[] = [];

  newsData: NewsItem[] = [
    {
      id: '1',
      title: 'Résultats Excellents au Baccalauréat 2024',
      category: 'Examens',
      date: '15 Juillet 2024',
      content: "Notre école affiche un taux de réussite exceptionnel de 96% au Baccalauréat 2024.",
      icon: 'fa-solid fa-award'
    },
    {
      id: '2',
      title: 'Championnat Inter-Écoles de Football',
      category: 'Sport',
      date: '10 Juillet 2024',
      content: "L'équipe de football de notre établissement remporte le championnat inter-écoles !",
      icon: 'fa-solid fa-trophy'
    },
    {
      id: '3',
      title: 'Nouveau Laboratoire de Physique-Chimie',
      category: 'Infrastructure',
      date: '5 Juillet 2024',
      content: "Inauguration de notre nouveau laboratoire de physique-chimie équipé des dernières technologies.",
      icon: 'fa-solid fa-book'
    }
  ];



  getIconByCategory(category: string): string {
  switch (category) {
    case 'Sport':
      return 'fa-solid fa-futbol';
    case 'Examens':
      return 'fa-solid fa-file-pen';
    case 'Infrastructure':
      return 'fa-solid fa-school';
    default:
      return 'fa-solid fa-newspaper';
  }
}


  selectedCategory = 'Tous';
  getallactualite(){
    this.api.getallact().subscribe({
      next:(value:any)=> {
        console.log("ma reponse",value)
        this.data = value
        this.cdr.detectChanges();

      },
      error:(err:any)=>{
        console.log("mon erreur",err)
      },
      complete() {
        console.log("api lancé")
      },

    })
  }

  get filteredNews(): NewsItems[] {
    return this.selectedCategory === 'Tous'
      ? this.data
      : this.data.filter(news => news.typeActivite === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

}
