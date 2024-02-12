export interface CommentData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}

export interface Comments {
  cursorId: number;
  comments: CommentData[];
}

export interface PostCommentData {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: string;
}
