chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var active = document.activeElement;
	request = new XMLHttpRequest();
	request.open('POST', 'http://api.typographie.ru/', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400)
			active.value = JSON.parse(request.responseText).result;
	}

	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send('raw='+encodeURIComponent(active.value));
});