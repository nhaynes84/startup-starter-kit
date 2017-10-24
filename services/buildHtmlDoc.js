const doc = (name, content) => `
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
        </html>`;

export default doc;