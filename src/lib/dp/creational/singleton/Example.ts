import {BookBorrower} from "./BookBorrower";

class Example {

  constructor() { }

  static start(): void {
    console.log("START TEST SINGLETON PATTER \n");

    const bookBorrower1 = new BookBorrower();
    const bookBorrower2 = new BookBorrower();

    bookBorrower1.borrowBook();
    console.log("BookBorrower1 asked to borrow the book");
    console.log("BookBorrower1 Author and Title: ");
    console.log(bookBorrower1.getAuthorAndTitle());
    console.log("");

    bookBorrower1.returnBook();
    console.log("BookBorrower1 returned the book");
    console.log("");

    bookBorrower2.borrowBook();
    console.log("BookBorrower2 Author and Title: ");
    console.log(bookBorrower1.getAuthorAndTitle());
    console.log("");

    console.log("END TEST SINGLETON PATTER \n");
  }

}

export {
  Example
};
