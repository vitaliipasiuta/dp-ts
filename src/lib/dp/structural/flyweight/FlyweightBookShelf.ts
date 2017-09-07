import FlyweightBook from "./FlyweightBook";

class FlyweightBookShelf {

  private books: FlyweightBook[] = [null, null, null, null];

  public addBook(book: FlyweightBook): void {
    this.books.push(book);
  }

  public showBooks(): string {
    let ret: string = '';
    for (let book of this.books) {
      if (book !== null) {
        ret += `title "${book.getTitle()}" author "${book.getAuthor()}"`
      }
    }
    return ret;
  }

}

export default FlyweightBookShelf;