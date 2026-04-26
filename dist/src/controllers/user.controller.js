"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
// GET /api/users
// GET /api/users/:id
// POST /api/users
// DELETE /api/users/:id
class UserController {
    static getAll(req, res, next) {
        try {
            const users = user_service_1.UserService.getAll();
            res.status(200).json(users);
        }
        catch (error) {
            next(error);
        }
    }
    static getById(req, res, next) {
        try {
            const id = Number(req.params.id);
            const user = user_service_1.UserService.getUserById(id);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    static createUser(req, res, next) {
        try {
            const { name, email } = req.body;
            const user = user_service_1.UserService.createUser(name, email);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    static removeUser(req, res, next) {
        try {
            const id = Number(req.params.id);
            user_service_1.UserService.deleteUser(id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserController = UserController;
