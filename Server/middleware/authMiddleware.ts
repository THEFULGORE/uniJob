const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../types";

module.exports = function (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
	if (req.method === 'OPTIONS') {
		next();
	}
	try {
		const token = req.headers.get('authorization')?.split(' ')[1];

		if (!token) {
			return res.status(401).json({ message: 'Not authorized' });
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (e) {
		res.status(401).json({ message: 'Not authorized' });
	}
};