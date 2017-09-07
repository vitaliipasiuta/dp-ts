import BookBorrower from "./BookBorrower";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST SINGLETON PATTER \n");

    const bookBorrower1 = new BookBorrower();
    const bookBorrower2 = new BookBorrower();

    bookBorrower1.borrowBook();
    console.log("BookBorrower1 asked to borrow the book");
    console.log("BookBorrower1 Author and Title: ");
    console.log(bookBorrower1.getAuthorAndTitle());
    console.log("\n");

    bookBorrower2.borrowBook();
    console.log("BookBorrower2 asked to borrow the book");
    console.log("BookBorrower2 Author and Title: ");
    console.log(bookBorrower2.getAuthorAndTitle());
    console.log("\n");

    bookBorrower1.returnBook();
    console.log("BookBorrower1 returned the book");
    console.log("\n");

    bookBorrower2.borrowBook();
    console.log("BookBorrower2 Author and Title: ");
    console.log(bookBorrower1.getAuthorAndTitle());

    console.log("\nEND TEST SINGLETON PATTER \n");
  }

}

export {
  Example
};
