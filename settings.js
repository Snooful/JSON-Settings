const fs = require("fs-extra");

/**
  * Manages settings via JSON.
*/
class JSONSettingsManager {
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
    fs.readJSON(this.path).then(json => {
      this.settings = json;
    }).catch(() => {
      this.settings = {};
    });
  }
  
  update(subreddit) {
		return fs.writeJSON(this.path, this.settings);
	}
}

module.exports = JSONSettingsManager;
