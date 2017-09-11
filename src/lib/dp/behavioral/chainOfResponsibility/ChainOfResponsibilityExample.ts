import Processor from "./image/Processor";
import IImage from "./image/IImage";
import IR from "./image/IR";
import LS from "./image/LS";
import BookTopic from "./book/BookTopic";
import BookSubTopic from "./book/BookSubTopic";
import BookSubSubTopic from "./book/BookSubSubTopic";
import IExample from "../../../models/IExample";

class ChainOfResponsibilityExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST CHAIN OF RESPONSIBILITY PATTER \n");

    const bookTopic: BookTopic = new BookTopic("PHP 5");
    console.log("bookTopic before title is set:");
    console.log("topic: " + bookTopic.getTopic());
    console.log("title: " + bookTopic.getTitle());
    console.log("");

    bookTopic.setTitle("PHP 5 Recipes by Babin, Good, Kroman, and Stephens");
    console.log("bookTopic after title is set: ");
    console.log("topic: " + bookTopic.getTopic());
    console.log("title: " + bookTopic.getTitle());
    console.log("");

    const bookSubTopic: BookSubTopic = new BookSubTopic("PHP 5 Patterns", bookTopic);
    console.log("bookSubTopic before title is set: ");
    console.log("topic: " + bookSubTopic.getTopic());
    console.log("title: " + bookSubTopic.getTitle());
    console.log("");

    bookSubTopic.setTitle("PHP 5 Objects Patterns and Practice by Zandstra");
    console.log("bookSubTopic after title is set: ");
    console.log("topic: " + bookSubTopic.getTopic());
    console.log("title: " + bookSubTopic.getTitle());
    console.log("");

    const bookSubSubTopic: BookSubSubTopic = new BookSubSubTopic("PHP 5 Patterns for Cats", bookSubTopic);
    console.log("bookSubSubTopic with no title set: ");
    console.log("topic: " + bookSubSubTopic.getTopic());
    console.log("title: " + bookSubSubTopic.getTitle());

    bookSubTopic.setTitle(null);
    console.log("bookSubSubTopic with no title for set for bookSubTopic either:");
    console.log("topic: " + bookSubSubTopic.getTopic());
    console.log("title: " + bookSubSubTopic.getTitle());
    console.log("");

    console.log("\nEND TEST CHAIN OF RESPONSIBILITY PATTER \n");
  }

  public startImage(): void {
    console.log("\nSTART TEST CHAIN OF RESPONSIBILITY PATTER \n");

    const inputImages: IImage[] = [new IR(), new IR(), new LS(), new IR(), new LS(), new LS()];
    const processors: Processor[] = [new Processor(), new Processor(), new Processor()];

    for (let i=0, j; i < inputImages.length; i++) {
      console.log("Operation #" + (i + 1) + ":");
      j = 0;
      while (!processors[j].execute(inputImages[i])) {
        j = (j + 1) % processors.length;
      }
      console.log('\n');
    }

    console.log("\nEND TEST CHAIN OF RESPONSIBILITY PATTER \n");
  }

}

export default ChainOfResponsibilityExample;
