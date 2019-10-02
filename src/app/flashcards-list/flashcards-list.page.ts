import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FlashcardsService } from 'src/services/flashcards.service';

@Component({
  selector: 'app-flashcards-list',
  templateUrl: 'flashcards-list.page.html',
  styleUrls: ['flashcards-list.page.scss'],
})
export class FlashcardsListPage {

  flashcards: Observable<any[]>;

  constructor(
    service: FlashcardsService
  ) {
    this.flashcards = service.getFlashcards().pipe( tap( x => console.log(x) ) );
  }
}
