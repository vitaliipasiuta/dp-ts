import BookCommand from "./BookCommand";

class BookStarsOffCommand extends BookCommand {

  execute(): void {
    this.bookComandee.setStarsOff();
  }

}

export default BookStarsOffCommand;
