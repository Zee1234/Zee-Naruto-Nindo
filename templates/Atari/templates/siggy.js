if(!zeeAtariSiggyClick) { function zeeAtariSiggyClick(name) {
	Array.from(document.querySelectorAll('input.zee-atari-siggy-selector')).forEach(e => e.checked = false)
	Array.from(document.querySelectorAll('input.zee-atari-siggy-' + name)).forEach(e => e.checked = true)
	return false
}}