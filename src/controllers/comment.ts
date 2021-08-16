import { Request, Response } from 'express';
import CommentService from '../services/comment';

const commentService = new CommentService();

class CommentController {
  async getArticleComments(req: Request, res: Response) {
    const { articleId } = req.params;

    const comments = await commentService.getArticleComments(+articleId);

    res.json({
      success: true,
      data: comments,
    });
  }

  async addArticleComment(req: Request, res: Response) {
    const { articleId } = req.params;
    const { userId, text } = req.body;

    await commentService.addArticleComment(+articleId, userId, text);

    res.json({
      success: true,
      message: 'Comment has been successfully added',
    });
  }

  async removeArticleComment(req: Request, res: Response) {
    const { articleId } = req.params;
    const { userId, commentId } = req.body;

    await commentService.removeArticleComment(+articleId, userId, commentId);

    res.json({
      success: true,
      message: 'Comment has been successfully removed',
    });
  }
}

export default CommentController;
