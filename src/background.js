/*
*	Typographie extension for Google Chrome, v1.3
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/chrome.typographie
*/

chrome.contextMenus.create({
	"title" : "Typographie",
	"type" : "normal",
	"contexts" : ["editable"],
	"onclick" : function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {});
		});
	}
});
