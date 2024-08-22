// export interface Post {
//   id: string;
//   createdAt: string
//   name: string;
//   userAvatar: string;
//   image: string;
//   likes: number;
//   caption: string;
// }

export interface Post {
  createdAt:   Date;
  name:        string;
  avatar:      string;
  description: string;
  likes:       number;
  image:       string;
  comments:    number;
  liked:       boolean;
  saved:       boolean;
  location:    string;
  id:          string;
}
