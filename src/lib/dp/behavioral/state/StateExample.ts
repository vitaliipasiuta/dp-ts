import Book from "./book/Book";
import BookContext from "./book/BookContext";
import Button from "./button/Button";
import IExample from "../../../models/IExample";

class StateExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST STATE PATTER \n");
    const btn: Button = new Button();

    btn.push();
    btn.push();
    btn.push();
    btn.push();

    console.log("\nEND TEST STATE PATTER \n");
  }

  public startBook(): void {
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

export default StateExample;
