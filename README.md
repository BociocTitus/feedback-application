# Feedback Application

This project is a feedback application built with TypeScript, featuring a React frontend and a Node.js backend. Users can submit feedback through the frontend, which communicates with the backend to store and retrieve feedback data.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

- **Location**: `frontend/`
- **Technology**: React with TypeScript
- **Main Files**:
  - `src/App.tsx`: Main application component that sets up routing.
  - `src/components/FeedbackForm.tsx`: Component for submitting feedback.
  - `src/pages/FeedbackPage.tsx`: Page that displays the feedback form.
  - `src/services/feedbackService.ts`: Service for making API calls to the backend.
  - `src/types/index.ts`: Type definitions for feedback data and responses.
- **Configuration**:
  - `package.json`: Lists dependencies and scripts for the frontend.
  - `tsconfig.json`: TypeScript configuration for the frontend.

### Backend

- **Location**: `backend/`
- **Technology**: Node.js with Express and TypeScript
- **Main Files**:
  - `src/app.ts`: Entry point of the backend application.
  - `src/controllers/feedbackController.ts`: Handles feedback submission and retrieval.
  - `src/models/feedbackModel.ts`: Defines the structure of feedback data.
  - `src/routes/feedbackRoutes.ts`: Defines routes for feedback-related operations.
  - `src/types/index.ts`: Type definitions for feedback data and requests.
- **Configuration**:
  - `package.json`: Lists dependencies and scripts for the backend.
  - `tsconfig.json`: TypeScript configuration for the backend.

## Getting Started

To get started with the application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd feedback-app
   ```

2. **Install dependencies**:
   - For the frontend:
     ```
     cd frontend
     npm install
     ```
   - For the backend:
     ```
     cd ../backend
     npm install
     ```

3. **Run the applications**:
   - Start the backend server:
     ```
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```
     cd frontend
     npm start
     ```

## Usage

Once both the frontend and backend are running, navigate to `http://localhost:3000` in your web browser to access the feedback application. Users can fill out the feedback form and submit their feedback, which will be processed by the backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.