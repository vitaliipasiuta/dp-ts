import User from "./User";

class ChatRoomMediator {

  public static showMessage(user: User, message: string): void {
    console.log(new Date().toString() + " [" + user.getName() + "] : " + message);
  }

}

export default ChatRoomMediator;
