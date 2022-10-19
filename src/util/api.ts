import { AdminType, admin, UserType, users } from "../data/users";
import { PostType, posts } from "../data/posts";

export type HomeLoader = {
  admin: AdminType;
  posts: PostType[];
  users: UserType[];
};

export function homeLoader() {
  return {
    admin,
    posts,
    users,
  };
}
