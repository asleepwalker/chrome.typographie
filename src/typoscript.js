/*
*	Typographie extension for Google Chrome, v1.1
*	(c) 2014 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/chrome.typographie
*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var active = document.activeElement;
	request = new XMLHttpRequest();
	request.open('POST', '//api.typographie.ru/', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	if (active.isContentEditable) {
		request.onload = function() {
			if (request.status >= 200 && request.status < 400)
				active.innerHTML = JSON.parse(request.responseText).result;
		};
		request.send('in=html&out=html&raw='+encodeURIComponent(active.innerHTML));
	} else {
		request.onload = function() {
			if (request.status >= 200 && request.status < 400)
				active.value = JSON.parse(request.responseText).result;
		};
		request.send('raw='+encodeURIComponent(active.value));
	}
});