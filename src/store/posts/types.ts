export type Post = {
  id: number;
  name: string;
  description: string;
  userId: number;
};

export interface PostsReducer {
  posts: {[key: number]: Post};
  postIds: number[];
}
