# Real-Time Chat Application

This is a real-time chat application built using React.js and WebSockets. The application allows users to send and receive messages in real-time, providing a responsive chat interface with message history.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/real-time-chat-app.git
   ```

2. Navigate to the client directory:

   ```
   cd real-time-chat-app/client
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

1. Start the development server:

   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Features

- Real-time messaging using WebSockets
- Responsive design for various screen sizes
- Message history display

### Folder Structure

- **public/**: Contains static files like `index.html` and `favicon.ico`.
- **src/**: Contains the React components and styles.
  - **components/**: Contains the main chat components:
    - `ChatWindow.jsx`: Main chat interface.
    - `MessageInput.jsx`: Input area for sending messages.
    - `MessageList.jsx`: Displays the list of messages.
  - `App.jsx`: Main application component that integrates all components.
  - `index.js`: Entry point for the React application.
  - **styles/**: Contains CSS styles for the application.

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the application.

### License

This project is licensed under the MIT License. See the LICENSE file for details.