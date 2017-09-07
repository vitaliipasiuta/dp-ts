import AbstractBook from "./AbstractBook";

abstract class AbstractMySQLBook extends AbstractBook {
  private subject: string = "MySQL";
}

export default AbstractMySQLBook;
