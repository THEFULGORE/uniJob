const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');
import { Request, Response, NextFunction } from "express";

const create = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let { title, description, price } = req.body;
		const vacancy = await Device.create({ title, description, price });

		return res.json(vacancy);
	} catch (e) {
		next(ApiError.badRequest(e.message));
	}
};

const getAll = async (req: Request, res: Response) => {
	let { id, limit, page, colName, order, lowestPrice, highestPrice, searchName } = req.query;
	page = page || '1';
	limit = limit || '9';
	let offset = Number(page) * Number(limit) - Number(limit);
	let vacancies;
	console.log(searchName);
	if (searchName) {
		vacancies = await Device.findAndCountAll({
			where: {
				name: { [Op.substring]: searchName },
			},
			limit,
			offset,
			order: [[colName, order]],
		});
		return res.json(vacancies);
	}

	return res.json(vacancies);
};

const getOne = async (req: Request, res: Response) => {
	const { id } = req.params;
	const device = await Device.findOne({
		where: { id },
	});
	return res.json(device);
};

module.exports = {
	create,
	getAll,
	getOne,
};