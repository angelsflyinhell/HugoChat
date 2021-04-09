import MessageDTO from "./model/MessageDTO";
import {MessageProps} from "../../pages/chat/Messages";

export default interface MessageService {
    getNewMessages(after: number): Promise<MessageDTO[]>;

    getOldMessages(before: number, amount: number): Promise<MessageDTO[]>;

    createMessage(msg: MessageDTO): Promise<MessageDTO>;

    dtoToProps(dtos: MessageDTO[], ownId: string): MessageProps[];
}