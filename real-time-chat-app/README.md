# Real-Time Chat Application

This project is a real-time chat application built using WebSockets and React.js. It provides a responsive chat interface where users can send and receive messages in real-time.

## Project Structure

The project is divided into two main parts: the client and the server.

```
real-time-chat-app
├── client                # Client-side application
│   ├── public            # Public assets
│   │   ├── index.html    # Main HTML file
│   │   └── favicon.ico    # Favicon
│   ├── src               # Source files for React application
│   │   ├── components     # React components
│   │   │   ├── ChatWindow.jsx  # Main chat interface
│   │   │   ├── MessageInput.jsx # User input for messages
│   │   │   └── MessageList.jsx  # Displays list of messages
│   │   ├── App.jsx       # Main application component
│   │   ├── index.js      # Entry point for React application
│   │   └── styles        # CSS styles
│   │       └── App.css   # Styles for the application
│   ├── package.json      # Client-side dependencies and scripts
│   └── README.md         # Client-side documentation
├── server                # Server-side application
│   ├── src               # Source files for server
│   │   ├── server.js     # Entry point for WebSocket server
│   │   └── routes        # Routes for chat functionality
│   │       └── chat.js   # Chat-related routes and handlers
│   ├── package.json      # Server-side dependencies and scripts
│   └── README.md         # Server-side documentation
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Features

- Real-time messaging using WebSockets.
- Responsive design for a seamless user experience.
- Message history management.
- User-friendly interface for sending and receiving messages.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd real-time-chat-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   node src/server.js
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the chat application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.
