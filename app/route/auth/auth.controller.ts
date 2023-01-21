import service from "../users/users.service";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENV from '../../env'

const authenticate = async (_req: Request<any>, _res: Response<any>) => {
    const { email, password } = _req.body;
    const data = await service.getByEmail(email);

    if (!data) {
        _res.send({ data: [], status: "fail", message: "User does not exist" });
        return;
    }

    if (!(await bcrypt.compare(password, data.password))) {
        _res.send({ data: [], status: "fail", message: "Invalid password" });
        return;
    }

    const token = jwt.sign({ sub: data.id }, ENV.JWT_KEY, { expiresIn: '7d' });

    _res.send({ data: [data], status: "success", message: "Get all users success", meta: { token } });
};

export { authenticate };
