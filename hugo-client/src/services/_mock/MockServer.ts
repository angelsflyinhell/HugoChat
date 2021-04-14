import MessageDTO from "../message/model/MessageDTO";
import rooms from "./_mock_resources/rooms.json"
import UserDTO from "../user/model/UserDTO";
import {v4} from "uuid";

const {MockEvent} = require("mocksse");

interface Room {
    id: string,
    name: string,
    messages: MessageDTO[],
    users: UserDTO[]
}


class MockServer {
    rooms: { [k: string]: Room };

    constructor() {
        this.rooms = rooms;

        setInterval(() => {
            this.addUser({
                name: "corsin alberto hugo boss ragettli",
                id: v4()
            }, "00000000-0000-0000-0000-000000000000")
        }, 1600)
    }

    addMessage(message: MessageDTO, roomId: string) {
        this.rooms[roomId].messages.push(message);
        new MockEvent({
            url: `/rooms/${roomId}/update`,
            responses: [
                {type: "message", data: message}
            ]
        })
    }

    addUser(user: UserDTO, roomId: string) {
        this.rooms[roomId].users.push(user);
        new MockEvent({
            url: `/rooms/${roomId}/update`,
            responses: [
                {type: "users", data: this.rooms[roomId].users}
            ]
        })
    }
}

const mockServer = new MockServer();
export default mockServer;
export type {MockServer};