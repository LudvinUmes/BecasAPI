import { Request, RequestHandler, Response } from 'express';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export const newUser: RequestHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { username, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if (user) {
        res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`,
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Guardarmos usuario en la base de datos
        await User.create({
            username: username,
            password: hashedPassword,
        });

        res.json({
            msg: `Usuario ${username} creado exitosamente!`,
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error,
        });
    }
};

export const loginUser: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const { username, password } = req.body;

    // Validamos si el usuario existe en la base de datos
    const user: any = await User.findOne({ where: { username: username } });

    if (!user) {
        res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`,
        });
        return;
    }

    // Validamos password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
        res.status(400).json({
            msg: `Password Incorrecta`,
        });
        return;
    }

    // Generamos token
    const token = jwt.sign(
        {
            username: username,
        },
        process.env.SECRET_KEY || 'pepito123',
        { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
        { username: username },
        process.env.REFRESH_SECRET_KEY || 'pepito_refresh'
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.json({ token, refreshToken });
};
