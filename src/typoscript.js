chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var active = document.activeElement;
	request = new XMLHttpRequest();
	request.open('POST', 'http://api.typographie.ru/', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	if (!active.hasAttribute('contenteditable')) {
		request.onload = function() {
			if (request.status >= 200 && request.status < 400)
				active.value = JSON.parse(request.responseText).result;
		}
		request.send('raw='+encodeURIComponent(active.value));
	} else {
		request.onload = function() {
			if (request.status >= 200 && request.status < 400)
				active.innerHTML = JSON.parse(request.responseText).result;
		}
		request.send('in=html&out=html&raw='+encodeURIComponent(active.innerHTML));
	}
});