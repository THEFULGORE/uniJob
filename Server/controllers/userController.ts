const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");
const ApiError = require("../error/apiError");
import { Request, Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../types";

const generateJWT = (id: number, email: string, role: string) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

const registration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, role } = req.body;
    if (!email || !password) {
        return next(ApiError.badRequest("Wrong email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
        return next(ApiError.badRequest("User with that email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return next(ApiError.internal("User with this email was not found"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return next(ApiError.internal("Wrong password"));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
};

const check = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
};

export { registration, login };
