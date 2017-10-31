'use strict';

const buildHtmlDoc = (name, content) => `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${name}</title>
            </head>
            <body>
                <div id='content'>${content}</div>
                <script>
                    window.openWebSocketConnection = function openWebSocketConnection(url) {
                    if (!url) url = 'ws://localhost:8000';

                        var webSocket = new WebSocket(url);
                        webSocket.onopen = function() {
                            webSocket.send('Hello server!');
                        };

                        webSocket.onmessage = function(message) {
                            console.info('New Message: ', message.data);
                        };
                    };
                </script>
                <script src="./public/bundle.js" charset="utf-8"></script>
            </body>
        </html>`;

export default buildHtmlDoc;