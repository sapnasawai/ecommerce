import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Sanjay",
    lastName: "Jatti",
    email: "sanjayjatti@gmail.com",
    password: bcyrpt.hashSync("sanjay123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
