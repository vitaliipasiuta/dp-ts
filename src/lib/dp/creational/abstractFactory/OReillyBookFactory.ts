import OReillyPHPBook from "./OReillyPHPBook";
import OReillyMySQLBook from "./OReillyMySQLBook";
import AbstractBookFactory from "./AbstractBookFactory";

class OReillyBookFactory extends AbstractBookFactory {

  private context: string = "OReilly";

  public makePHPBook() {
    return new OReillyPHPBook();
  }

  public makeMySQLBook() {
    return new OReillyMySQLBook();
  }

}

export default OReillyBookFactory;
