import {Visitor} from "./Visitor";
import {BookVisitee} from "./BookVisitee";
import {SoftwareVisitee} from "./SoftwareVisitee";

class FancyDescriptionVisitor extends Visitor {

  private description: string = null;

  public getDescription(): string {
    return this.description;
  }

  public setDescription(desc: string): void {
    this.description = desc;
  }

  public visitBook(bookVisitee: BookVisitee): void {
    this.setDescription(`${bookVisitee.getTitle()} ...!*@*! written !*! by !@!  ${bookVisitee.getAuthor()}`);
  }

  public visitSoftware(softwareVisitee: SoftwareVisitee): void {
    this.setDescription(`${softwareVisitee.getTitle()} 
     ...!!! made !*! by !@@! ${softwareVisitee.getSoftwareCompany()}
     ...www website !**! at  ${softwareVisitee.getSoftwareCompanyUrl()}`);
  }

}

export {
  FancyDescriptionVisitor
}