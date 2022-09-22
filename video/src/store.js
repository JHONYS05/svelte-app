// @ts-ignore
import { writable } from "svelte/store";
// @ts-ignore
import user1 from "./assets/token.png";
// @ts-ignore
import user2 from "./assets/token.png";
// @ts-ignore
import user3 from "./assets/token.png";

export const users = writable([
  {
    id: 1,
    image: user1,
    name: "John",
    email: "John@bitfumes.com",
    active: false,
  },
  {
    id: 2,
    image: user2,
    name: "Jeni",
    email: "Jenie@bitfumes.com",
    active: true,
  },
  {
    id: 3,
    image: user3,
    name: "Hacker",
    email: "hacker@bitfumes.com",
    active: false,
  },
]);

export const remove = ({ detail }) => {
  users.update((_users) => _users.filter((user) => user.id !== detail));
};

export const add = ({ detail }) => {
  users.update((_users) => [
    {
      id: _users.length + 1,
      image: user1,
      ...detail,
    },
    ..._users,
  ]);
};