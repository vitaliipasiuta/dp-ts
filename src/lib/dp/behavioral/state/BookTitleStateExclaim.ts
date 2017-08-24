import {IBookTitleStateInterface} from "./IBookTitleStateInterface";
import {BookContext} from "./BookContext";
import {BookTitleStateStars} from "./BookTitleStateStars";

class BookTitleStateExclaim implements IBookTitleStateInterface {

  private titleCount: number = 0;

  public showTitle(context: BookContext): string {
    const title = context.getBook().getTitle();
    this.titleCount++;
    context.setTitleState(new BookTitleStateStars());
    return title.replace(" ", "!");
  }

}

export {
  BookTitleStateExclaim
}