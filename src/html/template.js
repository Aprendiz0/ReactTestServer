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
    <script src="./app.bundle.js"></script>
    ${ viewBag.scripts ? viewBag.scripts : ''}
    
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