import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
// GET /api/users
// GET /api/users/:id
// POST /api/users
// DELETE /api/users/:id
export class UserController {
  static getAll(req: Request, res: Response, next: NextFunction): void {
    try {
      const users = UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  static getById(req: Request, res: Response, next: NextFunction): void {
    try {
      const id = Number(req.params.id);
      const user = UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  static createUser(req: Request, res: Response, next: NextFunction): void {
    try {
      const { name, email } = req.body;
      const user = UserService.createUser(name, email);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
  static removeUser(req: Request, res: Response, next: NextFunction): void {
    try {
      const id = Number(req.params.id);
      UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
