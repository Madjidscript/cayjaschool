import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dashboard } from '../../service/dashboard/dashboard';

interface Stat {
  icon: string; // ici on mettra une classe Font Awesome
  label: string;
  value: string;
}

@Component({
  selector: 'app-acceuil',
  imports: [CommonModule,RouterModule],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css'
})
export class Acceuil implements OnInit {
   stats: Stat[] = []
   totalEleve:any
   totalClasse:any
   totalProf:any


   constructor(private api:Dashboard,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getalltotaux()

    
  }

  getalltotaux(){
    this.api.getalltotaux().subscribe({
      next:(value:any)=> {
        console.log("value",value)
        this.totalProf= value.total_prof
        this.totalClasse = value.total_classe
        this.totalEleve = value.total_eleve
            this.getstat()

        this.cdr.detectChanges();

      },
      error:(err:any)=> {
        console.log("moj errur",err)
      },
      complete() {
        console.log("pai lancé")
      },
    })

  }

  getstat(){
     this.stats = [
    { icon: 'fas fa-users', label: 'Élèves', value: this.totalEleve },
    { icon: 'fas fa-book-open', label: 'Classes', value: this.totalClasse },
    { icon: 'fas fa-chalkboard-teacher', label: 'Enseignants', value: `${this.totalProf}+`},
    { icon: 'fas fa-award', label: 'Taux de Réussite', value: '95%' },
  ];
  }

  


}
