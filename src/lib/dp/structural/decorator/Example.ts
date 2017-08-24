
import {Book} from "./Book";
import {BookTitleDecorator} from "./BookTitleDecorator";
import {BookTitleStarDecorator} from "./BookTitleStarDecorator";
import {BookTitleExclaimDecorator} from "./BookTitleExclaimDecorator";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST DECORATOR PATTER \n");

    const patternBook = new Book('Gamma, Helm, Johnson, and Vlissides', 'Design Patterns');
    const decorator = new BookTitleDecorator(patternBook);
    const starDecorator = new BookTitleStarDecorator(patternBook, decorator);
    const exclaimDecorator = new BookTitleExclaimDecorator(patternBook, decorator);

    console.log('showing title : ');
    console.log(decorator.showTitle());
    console.log('');

    console.log('showing title after two exclaims added : ');
    exclaimDecorator.exclaimTitle();
    exclaimDecorator.exclaimTitle();
    console.log(decorator.showTitle());
    console.log('');

    console.log('showing title after star added : ');
    starDecorator.starTitle();
    console.log(decorator.showTitle());
    console.log('');

    console.log('showing title after reset: ');
    decorator.resetTitle();
    console.log(decorator.showTitle());
    console.log('');

    console.log("\nEND TEST DECORATOR PATTER \n");
  }

}

export {
  Example
};
