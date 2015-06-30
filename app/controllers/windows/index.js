(function constructor(args) {

	$.index.open();

})(arguments[0] || {});

function onButtonClick(e) {
	console.info('[click] ' + JSON.stringify(e, null, 2));

	Ti.UI.createAlertDialog({
		title: 'Event:',
		message: JSON.stringify(e)
	}).show();
}

function onToggleButtonClick(e) {
	console.info('[click] ' + JSON.stringify(e, null, 2));

	Ti.UI.createAlertDialog({
		title: 'Checked: ' + (e.source.checked ? 'Yes' : 'No'),
		message: JSON.stringify(e)
	}).show();
}
