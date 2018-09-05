const fs = require("fs-extra");
const BSM = require("@snooful/base-storage");

/**
  * Manages settings via JSON.
*/
class JSONSettingsManager extends BSM {
	/**
	 * @param {string} path The file path to the JSON file to store settings in.
	 */
	constructor(path) {
		this.path = path;
		this.init();

		/**
		 * The settings cache.
		 */
		this.settings = {};
	}
  
  init() {
	fs.ensureFile(this.path).then(() => {
		fs.readJSON(this.path).then(json => {
			this.settings = json;
		}).catch(() => {
			this.settings = {};
		});
	});
  }
  
  update() {
		return fs.writeJSON(this.path, this.settings);
	}
}

module.exports = JSONSettingsManager;
