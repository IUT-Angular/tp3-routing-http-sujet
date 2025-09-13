import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './components/book-list/book-list';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookService } from './services/book-service';
import { Book } from './models/book';
import { BookMenuComponent } from './components/book-menu/book-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookList, BookFormComponent, BookMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2-form-matangular-correction');

  // Injection de dépendance du service BookService
  constructor(protected bookService: BookService){ }
  
  addBook($event: Book): void {
    this.bookService.addBook($event);
  }
}
