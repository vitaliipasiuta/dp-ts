import {User} from "./User";

class ChatRoomMediator {

  public static showMessage(user: User, message: string): void {
    // tslint:disable-next-line:no-console
    console.log(new Date().toString() + " [" + user.getName() + "] : " + message);
  }

}

export {
  ChatRoomMediator
}