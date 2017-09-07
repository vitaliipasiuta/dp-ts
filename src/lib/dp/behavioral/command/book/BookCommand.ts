import BookCommandee from "./BookComandee";

abstract class BookCommand {

  protected bookComandee: BookCommandee;

  constructor(bookComandee: BookCommandee) {
    this.bookComandee = bookComandee;
  }

  abstract execute(): void;

}

export default BookCommand;
