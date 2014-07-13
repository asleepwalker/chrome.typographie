chrome.contextMenus.create({
	"title" : "Typographie!",
	"type" : "normal",
	"contexts" : ["editable"],
	"onclick" : function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {});
		});
	}
});