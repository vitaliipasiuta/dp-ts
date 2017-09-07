import FlyweightBook from "./FlyweightBook";

class FlyweightFactory {

  private books: FlyweightBook[] = [null, null, null, null];

  public getBook (bookKey: number): FlyweightBook {

    if (this.books[bookKey] === null) {
      this.books[bookKey] = this[`makeBook${bookKey}`](); // forgive me Lord
    }

    return this.books[bookKey];
  }

  public makeBook1 (): FlyweightBook {
    return new FlyweightBook('Larry Truett', 'PHP For Cats');
  }

  public makeBook2 (): FlyweightBook {
    return new FlyweightBook('Larry Truett', 'PHP For Dogs');
  }

  public makeBook3 (): FlyweightBook {
    return new FlyweightBook('Larry Truett', 'PHP For Birds');
  }
}

export default FlyweightFactory;
