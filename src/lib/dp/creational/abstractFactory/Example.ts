import OReillyBookFactory from "./OReillyBookFactory";
import SamsBookFactory from "./SamsBookFactory";

class Example {

  constructor() { }

  static testConcreteFactory(bookFactoryInstance): void {
    const phpBookOne = bookFactoryInstance.makePHPBook();
    console.log('first php Author: ' + phpBookOne.getAuthor());
    console.log('first php Title: ' + phpBookOne.getTitle());

    const phpBookTwo = bookFactoryInstance.makePHPBook();
    console.log('second php Author: ' + phpBookTwo.getAuthor());
    console.log('second php Title: ' + phpBookTwo.getTitle());

    const mySqlBook = bookFactoryInstance.makeMySQLBook();
    console.log('MySQL Author: '+ mySqlBook.getAuthor());
    console.log('MySQL Title: ' + mySqlBook.getTitle());
  }

  static start(): void {
    console.log("\nSTART TEST ABSTRACT FACTORY PATTER \n");

    console.log('testing OReillyBookFactory');
    const bookFactoryInstance1 = new OReillyBookFactory();
    Example.testConcreteFactory(bookFactoryInstance1);
    console.log('');

    console.log('testing SamsBookFactory');
    const bookFactoryInstance2 = new SamsBookFactory();
    Example.testConcreteFactory(bookFactoryInstance2);
    
    console.log("\nEND TEST ABSTRACT FACTORY PATTER \n");
  }

}

export {
  Example
};
