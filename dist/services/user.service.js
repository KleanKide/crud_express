"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// GET /api/users
// GET /api/users/:id
// POST /api/users
// DELETE /api/users/:id
let users = [
    {
        id: 1,
        name: "Alex",
        email: "alex@gmail.com",
    },
];
class UserService {
    static getAll() {
        return users;
    }
    static getUserById(id) {
        const user = users.find((el) => el.id === id);
        if (!user) {
            throw new Error("user not exists");
        }
        return user;
    }
    static createUser(name, email) {
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name,
            email,
        };
        users.push(newUser);
        return newUser;
    }
    static deleteUser(id) {
        const exist = users.some((el) => el.id === id);
        if (!exist) {
            throw new Error("user not exists");
        }
        users = users.filter((el) => el.id !== id);
    }
}
exports.UserService = UserService;
