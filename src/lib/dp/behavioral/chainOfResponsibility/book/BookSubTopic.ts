import AbstractBookTopic from "./AbstractBookTopic";
import BookTopic from "./BookTopic";

class BookSubTopic extends AbstractBookTopic {

  private topic: string;
  private title: string;
  private parentTopic: BookTopic;

  constructor(topic: string, parentTopic: BookTopic) {
    super();
    this.parentTopic = parentTopic;
    this.topic = topic;
    this.title = null;
  }

  getTopic(): string {
    return this.topic;
  }

  getParentTopic(): BookTopic {
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

export default BookSubTopic;