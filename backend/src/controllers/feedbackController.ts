import { Request, Response } from "express";
import { saveFeedback, findFeedbackById } from "../models/feedbackModel";

class FeedbackController {
    public async createFeedback(req: Request, res: Response): Promise<void> {
        try {
            const { message, name } = req.body;
            const newFeedback = await saveFeedback(message, name);
            res.status(201).json(newFeedback);
        } catch (error) {
            console.error("Error creating feedback:", error);
            res.status(500).json({ error: "Failed to create feedback" });
        }
    }

    public async getFeedback(req: Request, res: Response): Promise<void> {
        try {
            const feedbacks = await findFeedbackById(1);
            res.status(200).json(feedbacks);
        } catch (error) {
            console.error("Error retrieving feedbacks:", error);
            res.status(500).json({ error: "Failed to retrieve feedbacks" });
        }
    }
}

export default FeedbackController;