import UserDTO from "./model/UserDTO";

export default interface UserService {
    createUser(user: UserDTO): Promise<UserDTO>;

    keepActive(uuid: string): Promise<void>;
}