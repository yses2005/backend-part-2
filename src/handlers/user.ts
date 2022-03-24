import { User } from '@models';

export class UserHandler {
    async getAllUsers(): Promise<User[]> {
        const users = await User.find();
        return users;
    }

    async create(username: string, password: string): Promise<User> {
        const user = new User();
        Object.assign(user, { username, password });
        await user.save();

        return user;
    }

    async updatePassword(username: string, password: string) {}
    async delete(username: string) {}
}