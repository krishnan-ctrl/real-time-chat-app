# Real-Time Chat Application

This is a real-time chat application built using WebSockets and React.js. The application allows users to send and receive messages in real-time, providing a responsive chat interface with message history.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client-side of the application is built using React.js and is located in the `client` directory. It includes the following components:

- **ChatWindow**: The main chat interface that displays the message list and input area.
- **MessageInput**: A component for handling user input to send messages.
- **MessageList**: A component that displays the list of messages in the chat.

### Server

The server-side of the application is responsible for handling WebSocket connections and managing message history. It is located in the `server` directory and includes:

- **WebSocket Server**: Set up in `server.js` to handle incoming connections and messages.
- **Chat Routes**: Defined in `routes/chat.js` to manage message broadcasting to connected clients.

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
   cd server
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
   cd client
   npm start
   ```

### Usage

Once both the server and client are running, open your browser and navigate to `http://localhost:3000` to access the chat application. You can open multiple tabs or windows to simulate different users chatting in real-time.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.