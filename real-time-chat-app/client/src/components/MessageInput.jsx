import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                required
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;