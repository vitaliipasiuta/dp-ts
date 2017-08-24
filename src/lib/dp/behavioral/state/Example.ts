import {Book} from "./Book";
import {BookContext} from "./BookContext";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST STATE PATTER \n");

    const book = new Book('PHP for Cats','Larry Truett');
    const context = new BookContext(book);

    console.log('test 1 - show name');
    console.log(context.getBookTitle());
    console.log('');

    console.log('test 2 - show name');
    console.log(context.getBookTitle());
    console.log('');

    console.log('test 3 - show name');
    console.log(context.getBookTitle());
    console.log('');

    console.log('test 4 - show name');
    console.log(context.getBookTitle());
    console.log('');

    console.log("\nEND TEST STATE PATTER \n");
  }

}

export {
  Example
};
