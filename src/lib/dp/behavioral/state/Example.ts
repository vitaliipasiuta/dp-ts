import Book from "./book/Book";
import BookContext from "./book/BookContext";
import Button from "./button/Button";

class Example {

  static start(): void {
    const btn: Button = new Button();

    btn.push();
    btn.push();
    btn.push();
    btn.push();
  }

  static startBook(): void {
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
