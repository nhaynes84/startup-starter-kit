'use strict';

const buildHtmlDoc = (name, content) => `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${name}</title>
            </head>
            <body>
                <div id='content'>${content}</div>
                <script src="./public/bundle.js" charset="utf-8"></script>
            </body>
        </html>`;

export default buildHtmlDoc;