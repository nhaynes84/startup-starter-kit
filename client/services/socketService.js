export const configureSocket = (socket = WebSocket, url = 'ws://localhost:8000') => {
    const webSocket = new socket(url);

    webSocket.onopen = () => {
        webSocket.send('Hello server!');
    };

    webSocket.onmessage = message => {
        console.info('New Message: ', message.data);
    };

    return webSocket;
};
