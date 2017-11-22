import BridgeBookAuthorTitle from "./BridgeBookAuthorTitle";
import BridgeBookTitleAuthor from "./BridgeBookTitleAuthor";
import IExample from "../../../models/IExample";
import PrinterReportExample from "./printer-report/PrinterReport";

class BridgeExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST BRIDGE PATTER \n");

    console.log("test 1 - author title with caps");
    const book1 = new BridgeBookAuthorTitle('Larry Truett', 'PHP for Cats', 'CAPS');
    console.log(book1.showAuthorTitle());
    console.log("");

    console.log("test 2 - author title with stars");
    const book2 = new BridgeBookAuthorTitle('Larry Truett','PHP for Cats','STARS');
    console.log(book2.showAuthorTitle());
    console.log("");

    console.log("test 3 - title author with caps");
    const book3 = new BridgeBookTitleAuthor('Larry Truett','PHP for Cats','CAPS');
    console.log(book3.showTitleAuthor());
    console.log("");

    console.log("test 4 - title author with stars");
    const book4 = new BridgeBookTitleAuthor('Larry Truett','PHP for Cats','STARS');
    console.log(book4.showTitleAuthor());
    console.log("");

    console.log("\nEND TEST BRIDGE PATTER \n");
  }

  public startPrinterReportExample(){
    PrinterReportExample();
  }

}

export default BridgeExample;

