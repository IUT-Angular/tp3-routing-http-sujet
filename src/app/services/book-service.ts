import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BOOKS } from '../datas/books.stub';

@Injectable({
  providedIn: 'root'
})
export class BookService {
	private books:Book[] = BOOKS;

	public getAll(): Book[]{
		return this.books;
	}

    // Même si on la méthode ne retourne rien, il faut toujours typer les retours des méthodes
    addBook(book: Book): void{
        if(book.id === 0){
            book.id = Math.max(...this.books.map(b => b.id)) + 1;
        }

        this.books.push(book);
    }
}
