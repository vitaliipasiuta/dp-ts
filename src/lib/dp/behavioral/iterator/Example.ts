import {Book} from "./Book";
import {BookListIterator} from "./BookListIterator";
import {BookListReverseIterator} from "./BookListReverseIterator";
import {BookList} from "./BookList";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST ITERATOR PATTER \n");

    const firstBook = new Book('Core PHP Programming, Third Edition', 'Atkinson and Suraski');
    const secondBook = new Book('PHP Bible', 'Converse and Park');
    const thirdBook = new Book('Design Patterns', 'Gamma, Helm, Johnson, and Vlissides');

    const books = new BookList();
    books.addBook(firstBook);
    books.addBook(secondBook);
    books.addBook(thirdBook);

    const booksIterator = new BookListIterator(books);

    while (booksIterator.hasNextBook()) {
      const book = booksIterator.getNextBook();
      // tslint:disable-next-line:no-console
      console.log('getting next book with iterator :');
      // tslint:disable-next-line:no-console
      console.log(book.getTitleAndAuthor());
      // tslint:disable-next-line:no-console
      console.log('\n');
    }

    const booksIteratorReverse = new BookListReverseIterator(books);

    while (booksIteratorReverse.hasNextBook()) {
      const book = booksIteratorReverse.getNextBook();
      // tslint:disable-next-line:no-console
      console.log('getting next book with reverse iterator :');
      // tslint:disable-next-line:no-console
      console.log(book.getTitleAndAuthor());
      // tslint:disable-next-line:no-console
      console.log('\n');
    }

    const book = booksIteratorReverse.getCurrentBook();

    // tslint:disable-next-line:no-console
    console.log('getting current book with reverse iterator :');
    // tslint:disable-next-line:no-console
    console.log(book.getTitleAndAuthor());
    // tslint:disable-next-line:no-console
    console.log('\n');

    console.log("\nEND TEST ITERATOR PATTER \n");
  }

}

export {
  Example
};
