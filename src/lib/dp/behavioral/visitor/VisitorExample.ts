import BookVisitee from "./BookVisitee";
import SoftwareVisitee from "./SoftwareVisitee";
import PlainDescriptionVisitor from "./PlainDescriptionVisitor";
import FancyDescriptionVisitor from "./FancyDescriptionVisitor";
import Visitee from "./Visitee";
import Visitor from "./Visitor";
import IExample from "../../../models/IExample";

class VisitorExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST VISITOR PATTER \n");

    const book = new BookVisitee('Design Patterns', 'Gamma, Helm, Johnson, and Vlissides');
    const software = new SoftwareVisitee('Zend Studio', 'Zend Technologies', 'www.zend.com');

    const plainVisitor = new PlainDescriptionVisitor();

    this.acceptVisitor(book, plainVisitor);
    console.log('plain description of book: ' + plainVisitor.getDescription());
    this.acceptVisitor(software, plainVisitor);
    console.log('plain description of software: ' + plainVisitor.getDescription());
    console.log('');

    const fancyVisitor = new FancyDescriptionVisitor();

    this.acceptVisitor(book, fancyVisitor);
    console.log('fancy description of book: ' + fancyVisitor.getDescription());
    this.acceptVisitor(software, fancyVisitor);
    console.log('fancy description of software: ' + fancyVisitor.getDescription());

    console.log("\nEND TEST DECOVISITORRATOR PATTER \n");
  }

  private acceptVisitor(visitee: Visitee, visitor: Visitor): void {
    visitee.accept(visitor);
  }

}

export default VisitorExample;