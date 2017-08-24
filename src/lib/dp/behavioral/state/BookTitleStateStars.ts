import {IBookTitleStateInterface} from "./IBookTitleStateInterface";
import {BookContext} from "./BookContext";
import {BookTitleStateExclaim} from "./BookTitleStateExclaim";

class BookTitleStateStars implements IBookTitleStateInterface {

  private titleCount: number = 0;

  public showTitle(context: BookContext): string {
    const title = context.getBook().getTitle();
    this.titleCount++;
    if (this.titleCount > 1) {
      context.setTitleState(new BookTitleStateExclaim());
    }
    return title.replace(" ", "*");
  }

}

export {
  BookTitleStateStars
}