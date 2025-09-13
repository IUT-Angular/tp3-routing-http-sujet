/*
 * Les interfaces sont utilisés pour déclarer les DTOs(Data Transfer Object)
 * Ils permettent de typer les objets que l'on manipule dans notre application
*/
export interface Book {
	id: number,
	title: string,
	author: string,
	publicationDate: Date
}
