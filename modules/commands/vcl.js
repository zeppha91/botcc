const fs = require("fs");
module.exports.config = {
name: "vcl",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "räkü",
	description: "vcl",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vcl")==0 || (event.body.indexOf("Vcl")==0)) {
		var msg = {
				body: "°°°",
				attachment: fs.createReadStream(__dirname + `/noprefix/vcl.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}