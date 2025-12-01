import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


  // Déclaration du formulaire
  formData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  isSubmitting: boolean = false;

   onSubmit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched(); // force l’affichage des erreurs
      return;
    }

    this.isSubmitting = true;

    // simulation d’un envoi
   console.log("mon data",this.formData.value);
   

    alert('Votre message a été envoyé avec succès !');
    this.formData.reset();
    this.isSubmitting = false;
  }
}
