//@ts-check

// Best practice for defining a namespace
// com.domain.path.to.file

var com = window.com || {};
com.localhost = window.com.localhost || {};
com.localhost.olp = window.com.localhost.olp || {};
com.localhost.olp.js = window.com.localhost.olp.js || {};

com.localhost.olp.js.chatObj = {
	leadself: 'Me: ',
	leadcomputer: "PC: ",
	aSaid: ["This is a Cyber Chat"],
	msgYes: "Yes, that's a great idea.",
	msgNo: "No, that must be a mistake.",
	aSassyStuff: ["Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."],


	talk: function (msg) {
		this.echo(this.leadself + msg)
	},

	replyYesOrNo: function () {
		var msg = Math.random() > 0.5 ? this.msgYes : this.msgNo;
		this.echo(this.leadcomputer + msg);
	},

	// 😎😎Select any random sassy stuff and print it😎😎
	saySassyStuff: function () {
		var msg = this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];
		this.echo(this.leadcomputer + msg);
	},

	/**
	 * Store everything inside 'aSaid' and print out only what's valid at that time.
	 * @param {string} msg 
	 */
	echo: function (msg) {

		// Added div so it automatically breaks a line while displaying in the chat area
		this.aSaid.push(`<div>${msg}</div>`)
		var aSaidLength = this.aSaid.length;
		// Creating a start point
		// Since we only wanna display 6 chats a time
		var start = Math.max(aSaidLength - 6, 0),
			out = ""

		for (var i = start; i < aSaidLength; ++i) {
			out += this.aSaid[i];
		}
		// Display only 6 lines of chat
		// The out variable has the div tag from line 38

		// @ts-ignore
		$('.advert').html(out);

		// Display on the banner
		// @ts-ignore
		$('#talk').text(msg);
	}
}