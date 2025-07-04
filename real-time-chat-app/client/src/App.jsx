import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:4000');
        setSocket(newSocket);

        newSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        return () => newSocket.close();
    }, []);

    const sendMessage = (message) => {
        if (socket) {
            socket.send(JSON.stringify(message));
        }
    };

    return (
        <div className="App">
            <ChatWindow>
                <MessageList messages={messages} />
                <MessageInput sendMessage={sendMessage} />
            </ChatWindow>
        </div>
    );
};

export default App;