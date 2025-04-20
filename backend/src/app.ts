import express from "express";
import sequelize from "./db/dbConfig";
import { setFeedbackRoutes } from './routes/feedbackRoutes';
import 'dotenv/config';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
// Enable CORS
app.use(cors());
app.use(express.json());
setFeedbackRoutes(app);

// Sync the database
sequelize.sync({ force: false }) // Set `force: true` to reset tables on every run
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});