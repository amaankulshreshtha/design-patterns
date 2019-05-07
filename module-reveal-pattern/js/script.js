//@ts-check
// Convention: Put an underscore in front of private members

var chatModule = (function () {
	/* 
	***************************************
			START DEFINING PRIVATE MEMBERS
	***************************************
	*/
	var _leadself = 'Me: ',
		_leadcomputer = "PC: ",
		_aSaid = ["This is a Cyber Chat"],
		_msgYes = "Yes, that's a great idea.",
		_msgNo = "No, that must be a mistake.",
		_aSassyStuff = ["Like mold on books, grow myths on history.",
			"She moved like a poem and smiled like a sphinx.",
			"As long as we don’t die, this is gonna be one hell of a story.",
			"She laughed, and the desert sang.",
			"You’ve got about as much charm as a dead slug."];

	/**
	 * @private
	 * @param {string} msg message to be printed
	 * @description store everything inside 'aSaid' and print out only what's valid at that time.
	 */
	function _echo(msg) {

		// Added div so it automatically breaks a line while displaying in the chat area
		_aSaid.push(`<div>${msg}</div>`)
		var aSaidLength = _aSaid.length;
		// Creating a start point
		// Since we only wanna display 6 chats a time
		var start = Math.max(aSaidLength - 6, 0),
			out = ""

		for (var i = start; i < aSaidLength; ++i) {
			out += _aSaid[i];
		}
		// Display only 6 lines of chat
		// The out variable has the div tag from line 38

		// @ts-ignore
		$('.advert').html(out);

		// Display on the banner
		// @ts-ignore
		$('#talk').text(msg);
	}

	/* 
	***************************************
			START DEFINING PUBLIC MEMBERS
	***************************************
	*/

	function talk(msg) {
		_echo(_leadself + msg)
	};

	function replyYesOrNo() {
		var msg = Math.random() > 0.5 ? _msgYes : _msgNo;
		_echo(_leadcomputer + msg);
	};

	// 😎😎Select any random sassy stuff and print it😎😎
	function saySassyStuff() {
		var msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
		_echo(_leadcomputer + msg);
	}

	return {
		talk: talk,
		replyYesOrNo: replyYesOrNo,
		saySassyStuff: saySassyStuff
	};
})();

// This can be problematic if we need to work with 20 or 30 modules.
$(document).ready(function () {
	chatModule.talk('barf!');
	chatModule.replyYesOrNo();
	chatModule.saySassyStuff();
});