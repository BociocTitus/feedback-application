# Feedback Application Backend

This is the backend part of the Feedback Application, built using Node.js and TypeScript. The backend is responsible for handling feedback submissions and retrieving feedback data.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application. Initializes the Express app and sets up middleware and routes.
  - **controllers/**: Contains the controllers for handling requests.
    - **feedbackController.ts**: Manages feedback-related operations.
  - **models/**: Contains the data models.
    - **feedbackModel.ts**: Defines the structure of feedback data and methods for database interaction.
  - **routes/**: Contains the route definitions.
    - **feedbackRoutes.ts**: Defines routes for feedback-related operations.
  - **types/**: Contains TypeScript interfaces and types.
    - **index.ts**: Defines interfaces for feedback data and requests.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd feedback-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

## API Endpoints

- **POST /feedback**: Submit feedback.
- **GET /feedback**: Retrieve feedback.

## Technologies Used

- Node.js
- Express
- TypeScript
- [Other dependencies listed in package.json]

## License

This project is licensed under the MIT License. See the LICENSE file for details.