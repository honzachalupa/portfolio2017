const path = require('path');

module.exports = {

	/* Return different configuration file depending on the environment */
	getConfig: (options) => {

		/* Get configuration filepath relative to the module directory */
		const configFile = options.environment.isDevelopment ? 'dev.js' : 'prod.js';

		configPath = path.resolve(__dirname, configFile);
		configPath = './' + path.relative(process.cwd(), configPath);

		return configPath;
	}

};
