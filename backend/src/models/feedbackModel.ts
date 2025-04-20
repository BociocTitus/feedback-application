import { DataTypes, Model } from "sequelize";
import sequelize from "../db/dbConfig";
import { analyzeSentiment } from "../services/sentimentAnalysisService";

export enum FeedbackTopic {
  PRODUCT = "Product",
  SERVICE = "Service",
  OTHER_CUSTOMERS = "Other Customers",
}

export interface FeedbackAttributes {
  id?: number;
  userId: number;
  feedbackText: string;
  topic: FeedbackTopic;
  sentiment: string; // e.g., "positive", "negative", "neutral"
  createdAt?: Date;
}

class Feedback extends Model<FeedbackAttributes> implements FeedbackAttributes {
  public id!: number;
  public userId!: number;
  public feedbackText!: string;
  public topic!: FeedbackTopic;
  public sentiment!: string;
  public readonly createdAt!: Date;
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feedbackText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic: {
      type: DataTypes.ENUM(...Object.values(FeedbackTopic)),
      allowNull: false,
    },
    sentiment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Feedback",
    tableName: "feedbacks",
  }
);

export async function saveFeedback(message: string, name: string) {
  console.log("Saving feedback:", { message, name });
  const sentiment = await analyzeSentiment(message);

  const feedback = await Feedback.create({
    userId: 1, // Placeholder for user ID
    feedbackText: message,
    topic: FeedbackTopic.OTHER_CUSTOMERS, // Placeholder for topic
    sentiment: "positive", // Placeholder for sentiment analysis  
  });

  return feedback;
}

export async function findFeedbackById(id: number) {
  return Feedback.findByPk(id);
}

export default Feedback;