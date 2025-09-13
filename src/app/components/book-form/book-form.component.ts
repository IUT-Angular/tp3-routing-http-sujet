import { Component, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models/book';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  @Output() addBookEvent = new EventEmitter<Book>();

  book: Book = { id: 0, title: '', author: '', publicationDate: new Date() }
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(this.book.title, Validators.required),
    author: new FormControl(this.book.author, Validators.required),
    publicationDate: new FormControl(this.book.publicationDate, Validators.required)
  });

  addBook() {    
    if (this.bookForm.invalid) {
      console.error("Error addBook");
      return;
    }
    
    this.book = this.bookForm.value;

    this.addBookEvent.emit(this.book);
    this.bookForm.reset();
  }
}