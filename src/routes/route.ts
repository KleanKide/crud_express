import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const route = Router()

route.get('/', UserController.getAll)
route.get('/:id', UserController.getById)
route.post('/', UserController.createUser)
route.delete('/:id', UserController.removeUser)


export default route
