import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "analog",
    description:
      "It is a watch whose display is not digital but rather analog with a traditional clock face",
  },
  {
    _id: uuid(),
    categoryName: "digital",
    description:
      "It is one in which the time is displayed as a series of digits",
  },
  {
    _id: uuid(),
    categoryName: "analog-digital",
    description:
      "It is hybrid form of analog and digital",
  },
];
