function typoprocess() {
	chrome.runtime.sendMessage({}, function(response) {});
}

chrome.contextMenus.create({
	"title" : "Typographie!",
	"type" : "normal",
	"contexts" : ["editable"],
	"onclick" : typoprocess()
});