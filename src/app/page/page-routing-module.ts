import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Professeur } from './professeur/professeur';
import { Document } from './document/document';
import { Infos } from './infos/infos';
import { Contact } from './contact/contact';
import { Classes } from './classes/classes';
import { Apropos } from './apropos/apropos';

const routes: Routes = [
  {path:"",redirectTo:"acceuil",pathMatch:"full" },
  {path:"acceuil",component:Acceuil },
  {path:"apropos",component:Apropos },
  {path:"proffesseur",component:Professeur },
  {path:"document",component:Document },
  {path:"infos",component:Infos },
  {path:"contact",component:Contact },
  {path:"classes",component:Classes }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
