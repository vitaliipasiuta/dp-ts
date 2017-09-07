import BookCommand from "./BookCommand";

class BookStarsOnCommand extends BookCommand {

  execute(): void {
    this.bookComandee.setStarsOn();
  }

}

export default BookStarsOnCommand;
