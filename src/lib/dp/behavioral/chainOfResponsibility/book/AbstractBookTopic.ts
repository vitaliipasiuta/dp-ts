abstract class  AbstractBookTopic {

  abstract getTopic(): string;
  abstract getTitle(): string;
  abstract setTitle(title: string): void;

}

export default AbstractBookTopic;