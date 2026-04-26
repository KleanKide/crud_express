import { User } from "../types/user.types";
// GET /api/users
// GET /api/users/:id
// POST /api/users
// DELETE /api/users/:id
let users: User[] = [
  {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com",
  },
];

export class UserService {
  static getAll(): User[] {
    return users;
  }
  static getUserById(id: number): User {
    const user = users.find((el) => el.id === id);
    if (!user) {
      throw new Error("user not exists");
    }
    return user;
  }
  static createUser(name: string, email: string) {
    const newUser: User = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
    };
    users.push(newUser);
    return newUser;
  }

  static deleteUser(id: number) {
    const exist = users.some((el) => el.id === id);
    if (!exist) {
      throw new Error("user not exists");
    }
    users = users.filter((el) => el.id !== id);
  }
}
