import { Component } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [
    DatePipe
  ],
  templateUrl: './book-list.html'
})
export class BookList {
    //Toujours typer les variables et préciser la visibilité (private, public, protected)
    //Dans le cadre d'un tableau, toujours initialiser la variable avec un tableau vide
    protected books: Book[] = [];

    // Injection de dépendance du service en déclarant une variable de type BookService dans le constructeur et en précisant la visibilité (private, public, protected)
    constructor(private bookService: BookService) {
    }

    ngOnInit(){
        this.books = this.bookService.getAll();
    }
}
