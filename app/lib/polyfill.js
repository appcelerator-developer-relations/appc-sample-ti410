exports.createCommandBar = function createCommandBar(params) {
	var commandBar = Ti.UI.Windows.createCommandBar(params);

	// Alloy expects the commandBar to have an add() function
	commandBar.add = function (item) {

		// FIXME: https://jira.appcelerator.org/browse/TIMOB-19111
		var items = this.items;
		this.items.push(item);
		this.items = items;
	};

	return commandBar;
};

exports.createAppBarButton = function createAppBarButton(params) {
	return Ti.UI.Windows.createAppBarButton(params);
};

exports.createAppBarToggleButton = function createAppBarToggleButton(params) {
	return Ti.UI.Windows.createAppBarToggleButton(params);
};

exports.createAppBarSeparator = function createAppBarSeparator() {
	return Ti.UI.Windows.createAppBarSeparator();
};
