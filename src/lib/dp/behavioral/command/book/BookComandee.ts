class BookCommandee {

  private author: string;
  private title: string;

  constructor (title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public setStarsOn(): void {
    this.setAuthor(this.getAuthor().replace(" ", "*"));
    this.setTitle(this.getTitle().replace(" ", "*"));
  }

  public setStarsOff(): void {
    this.setAuthor(this.getAuthor().replace("*", " "));
    this.setTitle(this.getTitle().replace("*", " "));
  }

  public getTitleAndAuthor(): string {
    return `${this.getTitle()} by ${this.getAuthor()}`
  }

}

export default BookCommandee;
