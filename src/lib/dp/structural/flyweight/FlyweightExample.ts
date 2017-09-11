import FlyweightFactory from "./FlyweightFactory";
import FlyweightBookShelf from "./FlyweightBookShelf";
import IExample from "../../../models/IExample";

class FlyweightExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST FLYWEIGHT PATTER \n");

    const flyweightFactory = new FlyweightFactory();
    const flyweightBookShelf1 =  new FlyweightBookShelf();

    let flyweightBook1 = flyweightFactory.getBook(1);
    flyweightBookShelf1.addBook(flyweightBook1);

    const flyweightBook2 = flyweightFactory.getBook(1);
    flyweightBookShelf1.addBook(flyweightBook2);

    console.log('test 1 - show the two books are the same book');
    if (flyweightBook1 === flyweightBook2) {
      console.log('1 and 2 are the same');
    } else {
      console.log('1 and 2 are not the same');
    }
    console.log('');

    console.log('test 2 - with one book on one self twice');
    console.log(flyweightBookShelf1.showBooks());
    console.log('');

    const flyweightBookShelf2 = new FlyweightBookShelf();
    flyweightBook1 = flyweightFactory.getBook(2);
    flyweightBookShelf2.addBook(flyweightBook1);
    flyweightBookShelf1.addBook(flyweightBook1);

    console.log('test 3 - book shelf one');
    console.log(flyweightBookShelf1.showBooks());
    console.log('');

    console.log('test 3 - book shelf two');
    console.log(flyweightBookShelf2.showBooks());
    console.log('');

    console.log("\nEND TEST FLYWEIGHT PATTER \n");
  }

}

export default FlyweightExample;
