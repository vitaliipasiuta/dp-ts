import Visitee from "./Visitee";
import Visitor from "./Visitor";

class SoftwareVisitee extends Visitee {

  private title: string;
  private softwareCompany: string;
  private softwareCompanyUrl: string;

  constructor (title: string, softwareCompany: string, softwareCompanyUrl: string) {
    super();
    this.title = title;
    this.softwareCompany = softwareCompany;
    this.softwareCompanyUrl = softwareCompanyUrl;
  }

  public getSoftwareCompany(): string {
    return this.softwareCompany;
  }

  public getSoftwareCompanyUrl(): string {
    return this.softwareCompanyUrl;
  }

  public getTitle(): string {
    return this.title;
  }

  public accept(visitor: Visitor): void {
    visitor.visitSoftware(this);
  }

}

export default SoftwareVisitee;
