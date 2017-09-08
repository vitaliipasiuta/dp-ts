import ICommand from "./ppl/ICommand";
import Politician from "./ppl/Politician";
import DomesticEngineer from "./ppl/DomesticEngineer";
import Programmer from "./ppl/Programmer";
import BookCommandee from "./book/BookComandee";
import BookStarsOnCommand from "./book/BookStarsOnCommand";
import BookStarsOffCommand from "./book/BookStarsOffCommand";
import BookCommand from "./book/BookCommand";
import IExample from "../../../models/IExample";

class CommandExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST COMMAND PATTER \n");

    const book: BookCommandee = new BookCommandee('Design Patterns', 'Gamma, Helm, Johnson, and Vlissides');
    console.log('book after creation: ');
    console.log(book.getTitleAndAuthor());
    console.log('');

    const starsOn: BookStarsOnCommand = new BookStarsOnCommand(book);
    this.callCommand(starsOn);
    console.log('book after stars on: ');
    console.log(book.getTitleAndAuthor());
    console.log('');

    const starsOff: BookStarsOffCommand = new BookStarsOffCommand(book);
    this.callCommand(starsOff);
    console.log('book after stars off: ');
    console.log(book.getTitleAndAuthor());
    console.log('');

    console.log("\nEND TEST COMMAND PATTER \n");
  }

  private callCommand(bookCommand: BookCommand): void {
    bookCommand.execute();
  }

  private startPpl(): void {
    console.log("\nSTART TEST COMMAND PATTER \n");

    const queue = this.produceRequests();
    this.workOffRequests(queue);

    console.log("\nEND TEST COMMAND PATTER \n");
  }

  private produceRequests(): ICommand[] {
    const queue: ICommand[] = [];
    queue.push(new DomesticEngineer());
    queue.push(new Politician());
    queue.push(new Programmer());
    return queue;
  }

  private workOffRequests(queue: ICommand[]): void {
    for (const c of queue) {
      c.execute();
    }
  }

}

export default CommandExample;

