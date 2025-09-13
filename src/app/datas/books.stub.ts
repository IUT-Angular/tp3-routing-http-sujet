import { Book } from "../models/book";

export const BOOKS: Book[] = [
	<Book>{id: 1, title: 'Harry Potter', author: 'Elle', publicationDate: new Date('2012')},
	<Book>{id: 2, title: 'Les rapaces', author: 'Oiseaux', publicationDate: new Date('2005')},
	<Book>{id: 3, title: 'How to code in TypeScript', author: 'Bliats', publicationDate: new Date('2024')},
];