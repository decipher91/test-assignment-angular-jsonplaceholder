export interface IPost extends IPostDto {
  faceUp: boolean;
}

export interface IPostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
}
