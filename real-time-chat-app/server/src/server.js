const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];
let messageHistory = [];

wss.on('connection', (ws) => {
    clients.push(ws);
    ws.send(JSON.stringify({ type: 'history', data: messageHistory }));

    ws.on('message', (message) => {
        const msg = JSON.parse(message);
        messageHistory.push(msg);
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(msg));
            }
        });
    });

    ws.on('close', () => {
        clients = clients.filter(client => client !== ws);
    });
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});