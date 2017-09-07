import AbstractBookTopic from "./AbstractBookTopic";

class BookTopic extends AbstractBookTopic {

  private topic: string;
  private title: string;

  constructor(topic: string) {
    super();
    this.topic = topic;
    this.title = null;
  }

  getTopic(): string {
    return this.topic;
  }

  getTitle(): string {
    if (this.title !== null) {
      return this.title;
    } else {
      return "There is no title available";
    }
  }

  setTitle(title: string): void {
    this.title = title;
  }

}

export default BookTopic;