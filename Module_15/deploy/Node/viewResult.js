exports.ViewResult = class ViewResult {
    constructor(model) {
        this.model = model;
    }

    render() {
        let htmltxt = `
            <html>
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <h1>${this.model}</h1>
                </body>
            </html>
            `;
        return htmltxt;
    }
}

 