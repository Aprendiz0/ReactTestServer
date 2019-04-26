export function MainTemplate(viewBag) {
    return (`
    <!DOCTYPE html>
    <html>
    
    <head>
        ${ viewBag.head ? viewBag.head : ''}
    </head>
    
    <body>
        ${ viewBag.body.nav ? viewBag.body.nav : ''}
        <div id="app">
            ${ viewBag.body.reactDom ? viewBag.body.reactDom : ''}
        </div>
    </body>
    ${ viewBag.scripts ? viewBag.scripts : ''}
    <script src="./app.bundle.js"></script>
    
    </html>
    `)
}

export function HtmlTemplate(reactDom, helmetData) {
    return `
        <!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString()}
            ${ helmetData.meta.toString()}
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        
        </html>
    `;
}