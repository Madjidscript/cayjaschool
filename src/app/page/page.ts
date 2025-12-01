import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {

}
