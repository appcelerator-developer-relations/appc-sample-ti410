(function constructor(args) {
    initMap();
    initListView();
    initOther();

    $.index.open();

})(arguments[0] || {});

function initListView() {

    // NEW: Allows you to add a marker, instead of replacing the former as with setMarker()
    $.listView.addMarker({
        sectionIndex: 0,
        itemIndex: 15
    });
    $.listView.addMarker({
        sectionIndex: 1,
        itemIndex: 15
    });
}

function initMap() {

    // NEW (iOS, Android): Add one or more - addCircles() - to a map
    $.map.addCircle(Alloy.Globals.map.createCircle({
        center: {
            longitude: -122.0502150,
            latitude: 37.3895100
        },
        strokeColor: Alloy.CFG.brandPrimary,
        strokeWidth: 5,
        fillColor: Alloy.CFG.brandPrimary.replace('#', '#88'),
        radius: 10000
    }));

    // NEW (iOS, Android): Add one or more - addPolylines() - to a map
    $.map.addPolyline(Alloy.Globals.map.createPolyline({
        points: [

            // can be an array
            [-122.0841890, 37.4223450], // Google HQ

            // or an object
            {
                longitude: -122.0502150, // Appcelerator HQ
                latitude: 37.3895100
            },

            [-122.0301890, 37.3316920] // Apple HQ    

        ],
        strokeColor: '#337ab7',
        strokeWidth: 5
    }));

    // NEW (iOS, Android): Add one or more - addPolygons() - to a map
    $.map.addPolygon(Alloy.Globals.map.createPolygon({
        points: [
            [-122.0546632, 37.4365219],
            [-122.0107179, 37.4362493],
            [-122.0344072, 37.4594175]
        ],
        strokeColor: '#5cb85c',
        strokeWidth: 5,
        fillColor: '#885cb85c'
    }));
}

function initOther() {

    // NEW (iOS, Android): Catch uncaught exceptions
    Ti.App.addEventListener('uncaughtException', function (e) {
        console.info('[uncaughtException ' + JSON.stringify(e, null, 2));

        // in development on iOS the red error screen will prevent our alert
        // from showing so we wait until the screen has been closed by the user.
        if (OS_IOS && !ENV_PROD) {
            $.otherWin.addEventListener('focus', function onFocus() {
                $.otherWin.removeEventListener('focus', onFocus);

                Ti.UI.createAlertDialog({
                    title: 'uncaughtException worked:',
                    message: JSON.stringify(e)
                }).show();
            });

        } else {
            Ti.UI.createAlertDialog({
                title: 'uncaughtException worked:',
                message: JSON.stringify(e)
            }).show();
        }
    });
}

// NEW (iOS, Android): Event that fires after user interacts with a custom row action
function onRowAction(e) {
    console.info('[rowAction] ' + JSON.stringify(e, null, 2));

    $.toast.text = '[marker]\n' + e.action;
}

// NEW (iOS, Android): Event that fires when scrolling starts
function onScrollstart(e) {
    console.info('[scrollstart] ' + JSON.stringify(e, null, 2));

    $.toast.text = '[scrollstart]\nfirstVisibleSectionIndex: ' + e.firstVisibleSectionIndex + '\nfirstVisibleItemIndex: ' + e.firstVisibleItemIndex + '\nvisibleItemCount: ' + e.visibleItemCount;
}

// NEW (iOS, Android): Event that fires when scrolling ends (either by stopping or after flinging it)
function onScrollend(e) {
    console.info('[scrollend] ' + JSON.stringify(e, null, 2));

    $.toast.text = '[scrollend]\nfirstVisibleSectionIndex: ' + e.firstVisibleSectionIndex + '\nfirstVisibleItemIndex: ' + e.firstVisibleItemIndex + '\nvisibleItemCount: ' + e.visibleItemCount;
}

function onMarker(e) {
    console.info('[marker] ' + JSON.stringify(e, null, 2));

    $.toast.text = '[marker]\nsectionIndex: ' + e.sectionIndex + '\nitemIndex: ' + e.itemIndex;
}

function doPatch(e) {
    var client = Ti.Network.createHTTPClient({
        onload: function (e) {
            console.info('[PATCH] ' + JSON.stringify(this.responseText, null, 2));

            Ti.UI.createAlertDialog({
                title: 'PATCH works:',
                message: this.responseText
            }).show();
        },
        onerror: function (e) {
            console.error('[PATCH] ' + JSON.stringify(e, null, 2));
            
            Ti.UI.createAlertDialog({
                title: 'PATCH did not work:',
                message: e.error || 'Unknown Error'
            }).show();
        }
    });

    // PARITY (Android): You can now use PATCH, just like you could on iOS
    client.open('PATCH', 'http://httpbin.org/patch');

    client.send();
}

function doUncaughtException(e) {
    e.doesNotExist();
}
