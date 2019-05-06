export function MainTemplate(viewBag) {
    return (`
    <!DOCTYPE html>
    <html>
    
    <head>
        ${ viewBag.head ? viewBag.head : ''}
    </head>
    
    <body>
        <div id="loadPage" class="outer backouter">
            <div class="middle">
                <div class="inner">
    
                    <div class="progress grey darken-2">
                        <div class="indeterminate white"></div>
                    </div>
    
                </div>
            </div>
        </div>
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