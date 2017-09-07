import ProxyBookList from "./ProxyBookList";
import Book from "./Book";

class Example {

  static start(): void {
    console.log("\nSTART TEST PROXY PATTER \n");

    const proxyBookList = new ProxyBookList();
    const inBook = new Book('PHP for Cats','Larry Truett');
    proxyBookList.addBook(inBook);

    console.log('test 1 - show the book count after a book is added');
    console.log(proxyBookList.getBookCount());
    console.log('');

    console.log('test 2 - show the book');
    const outBook = proxyBookList.getBook(1);
    console.log(outBook);
    console.log('');

    proxyBookList.removeBook(outBook);

    console.log('test 3 - show the book count after a book is removed');
    console.log(proxyBookList.getBookCount());
    console.log('');
    
    console.log("\nEND TEST PROXY PATTER \n");
  }

}

export {
  Example
};
