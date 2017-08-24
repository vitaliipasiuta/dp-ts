import {Visitor} from "./Visitor";
import {BookVisitee} from "./BookVisitee";
import {SoftwareVisitee} from "./SoftwareVisitee";

class PlainDescriptionVisitor extends Visitor {

  private description: string = null;

  public getDescription(): string {
    return this.description;
  }

  public setDescription(desc: string): void {
    this.description = desc;
  }

  public visitBook(bookVisitee: BookVisitee): void {
    this.setDescription(`${bookVisitee.getTitle()} by ${bookVisitee.getAuthor()}`);
  }

  public visitSoftware(softwareVisitee: SoftwareVisitee): void {
    this.setDescription(`${softwareVisitee.getTitle()} made by ${softwareVisitee.getSoftwareCompany()}
     website ${softwareVisitee.getSoftwareCompanyUrl()}`);
  }

}

export {
  PlainDescriptionVisitor
}