import AbstractBookTopic from "./AbstractBookTopic";
import BookTopic from "./BookTopic";
import BookSubTopic from "./BookSubTopic";

class BookSubSubTopic extends AbstractBookTopic {

  private topic: string;
  private title: string;
  private parentTopic: BookSubTopic;

  constructor(topic: string, parentTopic: BookSubTopic) {
    super();
    this.parentTopic = parentTopic;
    this.topic = topic;
    this.title = null;
  }

  getTopic(): string {
    return this.topic;
  }

  getParentTopic(): BookSubTopic {
    return this.parentTopic;
  }

  getTitle(): string {
    if (this.title !== null) {
      return this.title;
    } else {
      return this.parentTopic.getTitle();
    }
  }

  setTitle(title: string): void {
    this.title = title;
  }

}

export default BookSubSubTopic;