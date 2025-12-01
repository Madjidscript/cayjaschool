import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Proffeseuservice } from '../../service/professeurservice/proffeseuservice';
import { Dashboard } from '../../service/dashboard/dashboard';
export interface Teacher {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
}

export interface ProfesseurModel {
  uid: string;
  nom: string;
  prenom: string;
  email: string;
  numero: string;
  matiere: string;
  diplome: string;
}

@Component({
  selector: 'app-professeur',
  imports: [CommonModule,RouterModule],
  templateUrl: './professeur.html',
  styleUrl: './professeur.css'
})
export class Professeur implements OnInit {
  totalProf: any;
  totalClasse: any;
  totalEleve: any;
  totalMatiere: any;
  profMastertaux:any

  constructor(private api:Proffeseuservice,private cdr: ChangeDetectorRef,private api2:Dashboard){}

  teachersData: Teacher[] = [
    { id: '1', name: 'Mme. KAMGA Marie', subject: 'Français', qualification: 'Licence Lettres Modernes', experience: '8 ans' },
    { id: '2', name: 'M. NDJOCK Paul', subject: 'Français', qualification: 'Master Littérature', experience: '12 ans' },
    { id: '3', name: 'M. FOUDA Jean', subject: 'Mathématiques', qualification: 'Licence Mathématiques', experience: '10 ans' },
    { id: '4', name: 'Mme. BIYA Sarah', subject: 'Mathématiques', qualification: 'Master Mathématiques Appliquées', experience: '6 ans' },
    { id: '5', name: 'M. ESSOMBA Pierre', subject: 'Mathématiques', qualification: 'Licence Mathématiques', experience: '15 ans' },
    { id: '6', name: 'M. MANGA Robert', subject: 'Physique-Chimie', qualification: 'Master Physique', experience: '9 ans' },
    { id: '7', name: 'M. EBALE Martin', subject: 'Physique-Chimie', qualification: 'Licence Chimie', experience: '11 ans' },
    { id: '8', name: 'Mme. MBALLA Grace', subject: 'SVT', qualification: 'Master Biologie', experience: '7 ans' },
    { id: '9', name: 'Mme. NGOUÉ Anne', subject: 'SVT', qualification: 'Licence Biologie', experience: '13 ans' },
    { id: '10', name: 'M. ATANGANA Louis', subject: 'Histoire-Géographie', qualification: 'Master Histoire', experience: '14 ans' },
    { id: '11', name: 'Mme. OWONA Claire', subject: 'Histoire-Géographie', qualification: 'Licence Géographie', experience: '5 ans' },
    { id: '12', name: 'Mme. NGONO Françoise', subject: 'Anglais', qualification: 'Master Anglais', experience: '8 ans' },
    { id: '13', name: 'M. KENFACK Thomas', subject: 'Anglais', qualification: 'Licence LEA', experience: '12 ans' },
    { id: '14', name: 'Mme. MEKA Jeanne', subject: 'Allemand', qualification: 'Master Allemand', experience: '10 ans' },
    { id: '15', name: 'M. NOAH Samuel', subject: 'Philosophie', qualification: 'Master Philosophie', experience: '16 ans' },
    { id: '16', name: 'M. ONANA François', subject: 'EPS', qualification: 'Licence STAPS', experience: '9 ans' },
    { id: '17', name: 'Mme. BEKONO Patricia', subject: 'EPS', qualification: 'Licence EPS', experience: '6 ans' },
    { id: '18', name: 'M. AYISSI Bernard', subject: 'Électrotechnique', qualification: 'Ingénieur Électricien', experience: '11 ans' },
    { id: '19', name: 'M. OLOMO David', subject: 'Mécanique', qualification: 'Ingénieur Mécanique', experience: '13 ans' },
    { id: '20', name: 'Mme. EWODO Sylvie', subject: 'Informatique', qualification: 'Master Informatique', experience: '7 ans' },
    { id: '21', name: 'M. NANA Joseph', subject: 'Comptabilité', qualification: 'Master Comptabilité', experience: '8 ans' },
    { id: '22', name: 'Mme. TALLA Monique', subject: 'Secrétariat', qualification: 'Licence Secrétariat', experience: '10 ans' },
  ];

  data: ProfesseurModel[] = [];

  groupedTeachers: Record<string, ProfesseurModel[]> = {};
  subjects: string[] = [];

  subjectColors: Record<string, string> = {
    'Français': '#7e22ce', // violet
    'Mathématiques': '#2563eb', // bleu
    'Physique-Chimie': '#16a34a', // vert
    'SVT': '#059669', // émeraude
    'Histoire-Géographie': '#ca8a04', // jaune
    'Anglais': '#dc2626', // rouge
    'Allemand': '#ea580c', // orange
    'Philosophie': '#4f46e5', // indigo
    'EPS': '#db2777', // rose
    'Électrotechnique': '#0891b2', // cyan
    'Mécanique': '#4b5563', // gris
    'Informatique': '#7c3aed', // violet foncé
    'Comptabilité': '#0d9488', // teal
    'Secrétariat': '#e11d48', // rose foncé
  };

  ngOnInit(): void {
    this.getallprofesseur()
  }


  getallprofesseur(){
    this.api.allprofesseur().subscribe({
      next:(res:any)=> {
        console.log("mes data",res);
        this.data=res
         this.groupedTeachers = this.data.reduce((acc, prof) => {
          if (!acc[prof.matiere]) {
            acc[prof.matiere] = [];
          }
          acc[prof.matiere].push(prof);
          return acc;
        }, {} as Record<string, ProfesseurModel[]>);

        this.subjects = Object.keys(this.groupedTeachers);
        this.getalltotaux()
        this.cdr.detectChanges();

        
      },
      error:(err:any)=> {
        console.log("mon ereur",err)
      },
      complete() {
        console.log("yes")
      },

    })

  }

  getalltotaux(){
    this.api2.getalltotaux().subscribe({
      next:(value:any)=> {
        console.log("value",value)
        this.totalProf= value.total_prof
        this.totalClasse = value.total_classe
        this.totalEleve = value.total_eleve
        this.profMastertaux =value.pourcentageProfMaster
        this.totalMatiere =value.nbreMatiere
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


}
