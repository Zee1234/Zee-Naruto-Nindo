// Store to local storage
let Sensou_storeAnimState = (state: string) => {
	localStorage.setItem('Zee:Sensou:Anim_State', state)
}

// Retrieve from local storage
let Sensou_getAnimState = () => {
	return localStorage.getItem('Zee:Sensou:Anim_State')
}

// Stop animations
let Sensou_stopAnim = () => {
	document.querySelectorAll(
		'img[src="https://sig.grumpybumpers.com/host/WasogekiAshigaru.gif"]'
		).forEach(e => {
			e.parentElement?.classList.add('stopAnim')
		})
	document.querySelectorAll('.glitch').forEach(e => {
		e.classList.add('stopAnim')
	})
}

// Start animations
let Sensou_resumeAnim = () => {
	document.querySelectorAll(
		'img[src="https://sig.grumpybumpers.com/host/WasogekiAshigaru.gif"]'
		).forEach(e => {
			e.parentElement?.classList.remove('stopAnim')
		})
	document.querySelectorAll('.glitch').forEach(e => {
		e.classList.remove('stopAnim')
	})
}

// Update all toggles on the page to proper state
let Sensou_updateAll = (state: boolean) => {
	document.querySelectorAll('.animToggleInput').forEach( (e) => {
		if (e instanceof HTMLInputElement) {
			e.checked = state
		}
	})
}

// Toggle state of animation and store status
const Sensou_toggle = (e:HTMLInputElement) => {
	if (e.checked) {
		Sensou_storeAnimState('true')
		Sensou_resumeAnim()
	} else {
		Sensou_storeAnimState('false')
		Sensou_stopAnim()
	}
	Sensou_updateAll(e.checked)
}

// let Sensou_animStateGetSet: boolean;
// if (typeof Sensou_animStateGetSet !== 'undefined') {
	// document.addEventListener('onload', (e) => {
		let state = Sensou_getAnimState()
		if (state) {
			if (state === 'true') {
				Sensou_resumeAnim()
			} else {
				Sensou_stopAnim()
				Sensou_updateAll(false)
			}
		}
	// })
// 	Sensou_animStateGetSet = true
// }