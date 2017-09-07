import Book from "./Book";

interface IStrategy {
  showTitle(book: Book): string
}

export default IStrategy;
