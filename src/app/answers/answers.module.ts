import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnswersPage } from './answers.page';
import { PoFieldModule } from '@portinari/portinari-ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnswersPage
      }
    ])
  ],
  declarations: [AnswersPage]
})
export class AnswersPageModule {}
