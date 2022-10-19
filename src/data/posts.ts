import { UserType, users } from "./users";

export type PostType = {
  user: UserType;
  description: string;
  images: string[];
};

const randomUser = () => {
  return Math.floor(Math.random() * users.length);
};

export const posts = [
  {
    user: users[randomUser()],
    description: "Was a really good day!",
    images: ["/images/post.jpg"],
  },
  {
    user: users[randomUser()],
    description: "I captured many photos today!",
    images: ["/images/post2.jpg"],
  },
  {
    user: users[randomUser()],
    description: "on time :D",
    images: ["/images/post3.jpg"],
  },
  {
    user: users[randomUser()],
    description: "great shot from my office..",
    images: ["/images/post4.jpg"],
  },
  {
    user: users[randomUser()],
    description: "creating my next application",
    images: ["/images/post5.jpg"],
  },
];
