# Appcelerator Titanium 4.1.0 Sample App
This app demonstrates new features in Titanium 4.1.0. For more information about new and changed API's, see the [Release Notes](https://docs.appcelerator.com/platform/release-notes/?version=4.1.0.GA) and [All Fixed Issues](https://jira.appcelerator.org/issues/?filter=16879) on JIRA.

![screenshots](screenshots.png)

## Features demonstrated in this sample app

### [Windows](app/views/windows/index.xml)

* Added [Ti.UI.Windows.CommandBar](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.Windows.CommandBar) (and the rest of the API) for Windows.<br />![Windows](https://img.shields.io/badge/OS-Windows-red.svg?style=flat-square)

In anticipation of [ALOY-1280](https://jira.appcelerator.org/browse/ALOY-1280) we [app/lib/polyfill.js](app/lib/polyfill.js) to be able create the CommandBar via Alloy XML.

### [iOS & Android](app/views/index.xml)
Per tab:

#### Map

* [TIMOB-2231](https://jira.appcelerator.org/browse/TIMOB-2231): Added [Modules.Map.Circle](https://docs.appcelerator.com/platform/latest/#!/api/Modules.Map.Circle), [Modules.Map.Polyline](https://docs.appcelerator.com/platform/latest/#!/api/Modules.Map.Polyline) and [Modules.Map.Polygon](https://docs.appcelerator.com/platform/latest/#!/api/Modules.Map.Polygon) to the Map module.<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square) ![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square) 

#### ListView

* [TIMOB-16244](https://jira.appcelerator.org/browse/TIMOB-16244): Added [Ti.UI.ListView:scrollstart](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ListView-event-scrollstart) and [Ti.UI.ListView:scrollend](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ListView-event-scrollend) events.<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square) ![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)
* [TIMOB-16494](https://jira.appcelerator.org/browse/TIMOB-16494): Added [Ti.UI.ListView.addMarker()](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ListView-method-addMarker) to listen to multiple markers.<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square) ![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)
* [TIMOB-15596](https://jira.appcelerator.org/browse/TIMOB-15596): Added [Ti.UI.ListItem.editActions](https://docs.appcelerator.com/platform/latest/#!/guide/ListViews-section-37521650_ListViews-ActionItems) for [ListView Action Items](https://docs.appcelerator.com/platform/latest/#!/guide/ListViews-section-37521650_ListViews-ActionItems).<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square)

#### cacheSize

* [TIMOB-18874](https://jira.appcelerator.org/browse/TIMOB-18874): Parity for [Ti.UI.ScrollableView.cacheSize](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ScrollableView-property-cacheSize)<br />![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)

#### Other

* [TIMOB-17145](https://jira.appcelerator.org/browse/TIMOB-17145): Parity for `PATCH` as method for [Ti.Network.HTTPClient.open()](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.Network.HTTPClient-method-open)<br />![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)
* [TIMOB-18905](https://jira.appcelerator.org/browse/TIMOB-18964): Material Design dialogs on Android 4.x and older.<br />![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)
* [TIMOB-18816](https://jira.appcelerator.org/browse/TIMOB-18816): Added support for regional languages to [Internationalization](http://docs.appcelerator.com/platform/latest/#!/guide/Internationalization-section-29004892_Internationalization-Languagestrings).<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square) ![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)
* [TIMOB-18103](https://jira.appcelerator.org/browse/TIMOB-18103): Added [Ti.App:uncaughtException](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.App-event-uncaughtException) to listen to uncaught JavaScript exceptions.<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square) ![Android](https://img.shields.io/badge/OS-Android-green.svg?style=flat-square)

#### tiapp.xml

* [TIMOB-18834](https://jira.appcelerator.org/browse/TIMOB-18834): Added option to use JavaScriptCore instead of TiCore.<br />![iOS](https://img.shields.io/badge/OS-iOS-blue.svg?style=flat-square)
* [TIMOB-17993](https://jira.appcelerator.org/browse/TIMOB-17993): Added option to manually set `CFBundleVersion` and `CFBundleShortVersionString`.

See [Gruntfile.js](Gruntfile.js) for an example of how you can bump an integer build version number for Android and iOS while leaving it up to Titanium to use `<version>` for the release version number.
 
	npm install

	# to bump release 4.1.0 to 4.2.0 and build 123 to 124
	grunt version:minor

	# to bump build 124 to 125
	grunt version