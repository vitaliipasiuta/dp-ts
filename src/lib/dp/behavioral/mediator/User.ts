import ChatRoomMediator from "./ChatRoomMediator";

class User {

  private name: string;

  constructor (name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public sendMessage(message: string): void {
    ChatRoomMediator.showMessage(this, message)
  }
}

export default User;
