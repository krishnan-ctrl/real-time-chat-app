const express = require('express');
const router = express.Router();
const WebSocket = require('ws');

let messageHistory = [];

// WebSocket server setup
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    // Send the message history to the newly connected client
    ws.send(JSON.stringify(messageHistory));

    ws.on('message', (message) => {
        // Add the new message to the history
        messageHistory.push(message);
        
        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

// Integrate WebSocket with the Express server
router.get('/ws', (req, res) => {
    res.send('WebSocket endpoint');
});

module.exports = { router, wss };