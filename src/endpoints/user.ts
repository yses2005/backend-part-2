import { UserHandler } from '@handlers';
import { Response, Request, Router } from 'express';

export const UserEndpoint = Router();

const noOp = (): void => {};

const getUsers = async (_, res: Response) => {
    const handler = new UserHandler();
    const users = await handler.getAllUsers();

    return res.json({ users });
}

const createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const handler = new UserHandler();
    const newUser = await handler.create(username, password);

    return res.json(newUser);
};

UserEndpoint.get('/', getUsers);
UserEndpoint.post('/', createUser);
UserEndpoint.put('/', noOp);
UserEndpoint.delete('/', noOp);
