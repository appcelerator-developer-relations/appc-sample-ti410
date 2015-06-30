var path = require('path');
var child_process = require('child_process');

// Default fingerprint and key
var FINGERPRINT = 'CC:E3:7F:08:FA:03:9C:88:07:BC:CB:AB:7B:88:61:F4:75:9D:47:9F;com.appcelerator.sample.ti410';
var KEY = 'AIzaSyB1ATGRrby9stkKxvdl3SBYxSVB5Kkm7yM';

// Called by Titanium CLI to let the plugin initialize
exports.init = function (logger, config, cli, nodeappc) {

	// We only apply to Android
	if (cli.argv.platform !== 'android') {
		return;
	}

	// Hooking into the CLI on the build.pre.construct event
	cli.on('build.pre.construct', function (build, next) {

		// Find current key in tiapp.xml
		var manifest = cli.tiapp.android.manifest;
		var match = manifest.match(/"com\.google\.android\.maps\.v2\.API_KEY" android:value="([^"]+)"/);
		var key = match ? match[1] : null;

		// Find the fingerprint for the given or default keystore
		var keystore = cli.argv.keystore || path.join(cli.sdk.path, 'android', 'dev_keystore');
		var cmd = 'keytool -list -protected -keystore "' + keystore + '"';
		child_process.exec(cmd, function (error, stdout, stderr) {
			var match, fingerprint;

			// Find fingerprint in the stdout
			if (!error && stdout) {
				match = stdout.match(/\(SHA1\): (.+)$/m);

				if (match) {
					fingerprint = match[1] + ';' + cli.tiapp.id;
				}
			}

			// Key is missing or not the one needed for the found fingerprint
			if (!key || (fingerprint !== FINGERPRINT && key === KEY) || (fingerprint === FINGERPRINT && key !== KEY)) {

				// Key found in manifest
				if (key) {
					error = 'Please replace `' + key + '` in `tiapp.xml` with a valid Google API Key for your keystore fingerprint.\n\n';
				} else {
					error = 'Please make sure `tiapp.xml` has a valid Google API key\n\n';
				}

				error += 'Guide:\nhttp://docs.appcelerator.com/platform/latest/#!/guide/Google_Maps_v2_for_Android-section-36739898_GoogleMapsv2forAndroid-ObtainandAddaGoogleAPIKey\n';

				// Fingerprint found for keystore
				if (fingerprint) {
					error += '\nFingerprint:\n' + fingerprint + '\n';

					// Since it is the default one, we know the key
					if (fingerprint === FINGERPRINT) {
						error += '\nKey:\n' + KEY + '\n';
					}
				}

				logger.error(error);

				return process.exit(1);
			}

			return next();

		});
	});
};
