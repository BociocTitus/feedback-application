import { Router } from 'express';
import FeedbackController from '../controllers/feedbackController';

const router = Router();
const feedbackController = new FeedbackController();

export const setFeedbackRoutes = (app: Router) => {
    app.post('/feedback', feedbackController.createFeedback.bind(feedbackController));
    app.get('/feedback', feedbackController.getFeedback.bind(feedbackController));
};

export default router;