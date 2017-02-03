/*
*	Typographie extension for Google Chrome, v1.3
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/chrome.typographie
*/

var engine = new Typographie();

chrome.runtime.onMessage.addListener(function() {
	var active = document.activeElement;

	if (!active.isContentEditable) {
		engine.mode('plain', 'plain');
		active.value = engine.process(active.value);
	} else {
		engine.mode('html', 'html');
		active.innerHTML = engine.process(active.innerHTML);
	}
});
