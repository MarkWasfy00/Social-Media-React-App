export type UserType = {
  name: string;
  avatar: string;
  online: boolean;
};

export type AdminType = {
  name: string;
  avatar: string;
};

export const users = [
  {
    name: "Omar Mohamed",
    avatar: "/avatars/omar.jpg",
    online: true,
  },
  {
    name: "Hamza Mohamed",
    avatar: "/avatars/hamza.jpg",
    online: false,
  },
  {
    name: "Ahmed Ibrahim",
    avatar: "/avatars/hema.jpg",
    online: true,
  },
  {
    name: "Moamen Ashraf",
    avatar: "/avatars/moamen.jpg",
    online: true,
  },
  {
    name: "Ahmed El Neklawi",
    avatar: "/avatars/ahmed.jpg",
    online: false,
  },
  {
    name: "Mostafa Saied",
    avatar: "/avatars/mostafa.jpg",
    online: true,
  },
  {
    name: "Mohamed El Mahgoub",
    avatar: "/avatars/mohamed.jpg",
    online: false,
  },
];

export const admin = {
  name: "Mark Wasfy",
  avatar: "/avatars/avatar-admin.jpg",
};
