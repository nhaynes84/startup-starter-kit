'use strict';

const buildHtmlDoc = (name, content) => `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${name}</title>
            </head>
            <body>
                <div id='content'>
                    ${content}
                </div>
            </body>
            <script>
                window.openWebSocketConnection = function openWebSocketConnection(url) {
                    if (!url) url = 'ws://localhost:8000';

                    var webSocket = new WebSocket(url);
                    webSocket.onopen = function() {
                        webSocket.send('Connected bitches!');
                    };

                    webSocket.onmessage = function(message) {
                        console.info('New Message: ', message);
                    };
                };
            </script>
        </html>`;

export default buildHtmlDoc;