import Book from "./Book";
import BookListIterator from "./BookListIterator";
import BookListReverseIterator from "./BookListReverseIterator";
import BookList from "./BookList";
import IExample from "../../../models/IExample";

class IteratorExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST ITERATOR PATTER \n");

    const firstBook: Book = new Book('Core PHP Programming, Third Edition', 'Atkinson and Suraski');
    const secondBook: Book = new Book('PHP Bible', 'Converse and Park');
    const thirdBook: Book = new Book('Design Patterns', 'Gamma, Helm, Johnson, and Vlissides');

    const books: BookList = new BookList();
    books.addBook(firstBook);
    books.addBook(secondBook);
    books.addBook(thirdBook);

    const booksIterator: BookListIterator = new BookListIterator(books);

    while (booksIterator.hasNextBook()) {
      const book = booksIterator.getNextBook();
      console.log('getting next book with iterator :');
      console.log(book.getTitleAndAuthor());
      console.log('');
    }

    const booksIteratorReverse: BookListReverseIterator = new BookListReverseIterator(books);

    while (booksIteratorReverse.hasNextBook()) {
      const book = booksIteratorReverse.getNextBook();
      console.log('getting next book with reverse iterator :');
      console.log(book.getTitleAndAuthor());
      console.log('');
    }

    const book: Book = booksIteratorReverse.getCurrentBook();

    console.log('getting current book with reverse iterator :');
    console.log(book.getTitleAndAuthor());

    console.log("\nEND TEST ITERATOR PATTER \n");
  }

}

export default IteratorExample;
