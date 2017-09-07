import BookVisitee from "./BookVisitee";
import SoftwareVisitee from "./SoftwareVisitee";

abstract class Visitor {
  public abstract visitBook(bookVisitee: BookVisitee);
  public abstract visitSoftware(softwareVisitee: SoftwareVisitee);
}

export default Visitor;
