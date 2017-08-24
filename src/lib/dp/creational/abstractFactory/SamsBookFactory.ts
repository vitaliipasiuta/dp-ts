import {AbstractBookFactory} from "./AbstractBookFactory";
import {SamsPHPBook} from "./SamsPHPBook";
import {SamsMySQLBook} from "./SamsMySQLBook";

class SamsBookFactory extends AbstractBookFactory {

  private context: string = "Sams";

  public makePHPBook() {
    return new SamsPHPBook();
  }

  public makeMySQLBook() {
    return new SamsMySQLBook();
  }

}

export {
  SamsBookFactory
}