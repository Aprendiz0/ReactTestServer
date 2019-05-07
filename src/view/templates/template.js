const constants = require('fs').readFileSync('./src/view/templates/constants.html', 'utf8')

export function MainTemplate(viewBag) {
    return (`
    <!DOCTYPE html>
    <html>
    
    <head>
        ${ viewBag.head ? viewBag.head : ''}
    </head>
    
    <body>
        ${ constants ? constants : ''}
        ${ viewBag.body.nav ? viewBag.body.nav : ''}
        <div id="app">
            ${ viewBag.body.reactDom ? viewBag.body.reactDom : ''}
        </div>
    </body>
    ${ viewBag.scripts ? viewBag.scripts : ''}
    <script src="./app.bundle.js"></script>
    <script src="./js/constants.js"></script>
    
    </html>
    `)
}